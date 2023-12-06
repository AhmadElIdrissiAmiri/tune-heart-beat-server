import express from "express";
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import LikesRoutes from "./likes/routes.js";
import SongLikesRoutes from "./songlikes/routes.js";
import FollowsRoutes from "./follows/routes.js";
import PostRoutes from "./posts/routes.js";
import CommentsRoutes from "./comments/routes.js";
import PostLikesRoute from "./postLikes/routes.js";

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
SongLikesRoutes(app);
LikesRoutes(app);
PostRoutes(app);
CommentsRoutes(app);
UserRoutes(app);
PostLikesRoute(app);
FollowsRoutes(app);
app.listen(process.env.PORT || 4000);
