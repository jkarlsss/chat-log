import express from "express";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/auth.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/*path", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
    });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});