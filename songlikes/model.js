import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("songlikes", schema);
export default model;