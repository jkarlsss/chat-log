import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {

    const { JWT_SECRET } = process.env;
    if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

    // Generate JWT
    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "7d",
    });

    // Set JWT as HTTP-only cookie
    res.cookie("jwt", token, {
        httpOnly: true, // Prevent client-side JS from accessing the cookie
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        sameSite: "strict", // CSRF protection
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return token;
};