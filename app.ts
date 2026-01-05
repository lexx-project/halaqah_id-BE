import express from "express";
import "dotenv/config";
import authRoute from "./src/routes/auth.route";
import { errorHandler } from "./src/middleware/error.handler";

const app = express();

app.use(express.json());
app.use("/api/halaqah/auth", authRoute);

app.use(errorHandler);

export default app;
