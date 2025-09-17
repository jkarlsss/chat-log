import express from "express";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/*path", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
};

app.listen(PORT, () => 
    console.log(`Server is running on http://localhost:${PORT}`)
);