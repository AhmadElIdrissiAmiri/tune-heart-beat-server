import express from "express";
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
const CONNECTION_STRING = "mongodb://127.0.0.1:27017/TuneHeartBeat"
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors(
  {
    credentials: true,
    origin: process.env.FRONTEND_URL

  }

));
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(
  session(sessionOptions)
);
app.use(express.json());
UserRoutes(app);
app.listen(process.env.PORT || 4000);