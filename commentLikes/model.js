import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("commentLikes", schema);
export default model;