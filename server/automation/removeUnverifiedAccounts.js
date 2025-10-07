import cron from "node-cron";
import { User } from "../models/userModel.js";

// Remove accounts that never completed verification within 30 minutes
export const removeUnverifiedAccounts = () => {
  cron.schedule("*/30 * * * *", async () => {
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);

    try {
      const { deletedCount } = await User.deleteMany({
        accountVerified: false,
        createdAt: { $lt: thirtyMinutesAgo },
      });

      if (deletedCount) {
        console.log(`Removed ${deletedCount} unverified account(s) older than 30 minutes.`);
      }
    } catch (error) {
      console.error("Failed to purge unverified accounts:", error.message);
    }
  });
};
