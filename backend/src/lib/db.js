import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { MONGO_URI } = process.env;
        if (!MONGO_URI) throw new Error("MONGO_URI is not set");

        const connection = await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected: ", connection.connection.host);
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        process.exit(1); // 1 indicates failure, 0 indicates success
    }
};