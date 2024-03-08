import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conn = await connectDB();

conn.on("Error", (error) => {
	console.error("Failed to connect to database", error);
});

conn.once("Open", () => {
	console.log("Connected to database");
});

const app = express();
routes(app);

export default app;
