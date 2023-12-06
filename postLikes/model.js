import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("postLikes", schema);
export default model;