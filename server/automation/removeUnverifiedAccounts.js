import cron from "node-cron";
import {User} from "../models/userModel.js";



//  # ┌────────────── second (optional)
//  # │ ┌──────────── minute
//  # │ │ ┌────────── hour
//  # │ │ │ ┌──────── day of month
//  # │ │ │ │ ┌────── month
//  # │ │ │ │ │ ┌──── day of week
//  # │ │ │ │ │ │
//  # │ │ │ │ │ │
//  # * * * * * *


export const removeUnverifiedAccounts = () =>{
    cron.schedule("*/30 * * * *", async () => {
        const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000)
        await User.find({
            accountVerified : false,
            createdAt: { $lt: thirtyMinutesAgo } //lt means "less than"
        });
    })
}