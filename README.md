# certigence.co.uk Backend

## Overview
- Express 5 API that backs the Certigence frontend and handles authentication, contact/quote forms, newsletter sign-ups, and transactional email.
- MongoDB (local or Atlas) stores users, quotes, contacts, and newsletter subscriptions.
- Nodemailer delivers emails via the SMTP credentials configured in `server/config.env`.

## Prerequisites
- Node.js 18 or newer (`node -v` to confirm).
- npm 9+ (bundled with Node 18).
- A reachable MongoDB instance. Update `MONGO_URI` in `server/config.env` to match your local or cloud connection string.
- Valid SMTP credentials (for Gmail use an App Password; for Hostinger use the mailbox username/password).

## Local Setup
1. In the repo root run `npm install` inside the `server` folder if you have not already: `cd server && npm install`.
2. Duplicate `server/.env.example` to `server/config.env` (already present) and fill in secrets:
   - `MONGO_URI` (e.g. `mongodb://127.0.0.1:27017/certigence`).
   - `SMTP_MAIL`, `SMTP_PASSWORD`, and optionally `SMTP_SERVICE` or `SMTP_HOST`/`SMTP_PORT`.
   - `FRONTEND_URL` for password reset links.
   - Twilio variables only if you intend to send verification codes by SMS.
3. Make sure MongoDB is running locally (e.g. `mongod`) or that your Atlas cluster allows your IP.
4. Start the API from the `server` directory:
   - Development: `npm run dev` (auto restarts with nodemon).
   - Production-like: `npm start`.
5. The server listens on `http://localhost:8822` unless `PORT` is overridden.
6. The health check at `GET /` returns `Server is running and APIs are live...` when the app and database are healthy.

## Scheduled Jobs
- `removeUnverifiedAccounts` in `server/automation/removeUnverifiedAccounts.js` is scheduled every 30 minutes. At present it queries unverified users older than 30 minutes but does not delete them; update the handler if automatic cleanup is required.

## Core API Endpoints
All routes are prefixed with `/api/v1`.

### Auth (`server/routes/userRouter.js`)
- `POST /user/register`
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "+441234567890",
    "password": "Secret123",
    "verificationMethod": "email"
  }
  ```
- `POST /user/otp-verification`
  ```json
  {
    "email": "jane@example.com",
    "otp": 123456
  }
  ```
- `POST /user/login`
  ```json
  {
    "email": "jane@example.com",
    "password": "Secret123"
  }
  ```
- `GET /user/logout` (requires auth cookie)
- `GET /user/me` (requires auth cookie)
- `GET /user/all`
- `POST /user/password/forgot`
  ```json
  {
    "email": "jane@example.com"
  }
  ```
- `PUT /user/password/reset/:token`
  ```json
  {
    "password": "NewSecret123",
    "confirmPassword": "NewSecret123"
  }
  ```

### Contact (`server/routes/contactRouter.js`)
- `POST /contact`
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "mobile": "+441234567890",
    "company_name": "Certigence",
    "message": "Need help with ISO 9001."
  }
  ```

### Quotes (`server/routes/quoteRoutes.js`)
- `POST /quote/new`
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "certification": "ISO 27001"
  }
  ```

### Newsletter (`server/routes/newsletterRouter.js`)
- `POST /newsletter/subscribe`
  ```json
  {
    "email": "jane@example.com"
  }
  ```

## Thunder Client Quickstart
1. Open Visual Studio Code, install the Thunder Client extension if you have not already.
2. Start the backend (`npm run dev` in `server`).
3. Create a new Thunder Client request:
   - Method: e.g. `POST`.
   - URL: `http://localhost:8822/api/v1/contact` (adjust path per the endpoint list above).
   - In the Body tab choose `JSON` and paste one of the payload samples.
4. Press Send. Successful responses return status `200`/`201` and a JSON payload (e.g. `{ "success": true, ... }`).
5. For authenticated endpoints, enable Send Cookies in Thunder Client so that the `token` cookie issued by the login endpoint is reused automatically.
6. Save helpful requests into a collection for quick regression testing.

## Verifying Email Delivery
- The reusable mail helper lives in `server/utils/sendEmail.js` and logs `Email sent: <messageId>` on success.
- Ensure these variables are set before testing:
  - `SMTP_MAIL` = the mailbox username (for Gmail this is the full email address).
  - `SMTP_PASSWORD` = the app password or mailbox password.
  - `SMTP_SERVICE` = `gmail` or configure `SMTP_HOST`/`SMTP_PORT`/`SMTP_SECURE` appropriately.
  - Optional `SMTP_FROM` to override the from address; defaults to `SMTP_MAIL`.
- Test path A (contact form):
  1. Start the server with valid SMTP settings.
  2. Send the sample `POST /api/v1/contact` request from Thunder Client.
  3. Watch the terminal for the `Email sent:` log. A copy of the submission should arrive in the inbox defined by `SMTP_MAIL`.
- Test path B (quote form): repeat with `POST /api/v1/quote/new`; you should receive two emails: one to the requester email and one to the admin inbox.
- Forgot-password emails are triggered via `POST /api/v1/user/password/forgot`; when SMTP is misconfigured you will see `Error sending email: { message: ..., code: ... }` in the logs.

## Troubleshooting
- Mongo connection fails: confirm the database is running and accessible from the machine hosting the API. Local dev typically uses `mongodb://127.0.0.1:27017/your-db`.
- SMTP authentication errors: for Gmail make sure 2FA is enabled and you generated an App Password. For cPanel/Hostinger mailboxes, use the host-specific SMTP details and disable `SMTP_SERVICE`.
- No company name saved from contact requests: `contactModel` currently defines `Company_Name` (capitalized) while the controller sends `company_name`. Align the schema or controller before relying on the field.
- Unverified users not removed automatically: `removeUnverifiedAccounts` only queries and does not delete users; update the cron job if cleanup is needed.
- Password reset email not awaited: `forgetPassword` calls `sendEmail` without `await`, so failures may not hit the catch block. Add `await` if you need strict error handling.

## Security Notes
- Never commit real secrets (SMTP passwords, JWT secrets, Twilio tokens) to source control. Use environment-specific config files or secret managers.
- Rotate Gmail App Passwords if you share this repository or after testing in public environments.



http://localhost:8822/api/v1/contact