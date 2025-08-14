// server/middlewares/error.js

class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        // Captures the stack trace
        Error.captureStackTrace(this, this.constructor);
    }
}

// Global Error Handling Middleware
export const errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Handle invalid MongoDB ObjectId
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Handle duplicate key errors (e.g., email, phone)
    if (err.code === 11000) {
        const message = `Duplicate field value entered: ${Object.keys(err.keyValue)}`;
        err = new ErrorHandler(message, 400);
    }

    // Handle JWT errors
    if (err.name === "JsonWebTokenError") {
        err = new ErrorHandler("Invalid token. Please try again.", 401);
    }

    if (err.name === "TokenExpiredError") {
        err = new ErrorHandler("Token expired. Please login again.", 401);
    }

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;
