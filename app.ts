import express from "express";
import "dotenv/config";
import authRoute from "./src/routes/auth.route";
import halaqahRoute from "./src/routes/halaqah.route";
import santriRoute from "./src/routes/santri.route";
import { errorHandler } from "./src/middleware/error.handler";

import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/halaqah/auth", authRoute);
app.use("/api/halaqah", halaqahRoute);
app.use("/api/santri", santriRoute);

app.use(errorHandler);

export default app;
