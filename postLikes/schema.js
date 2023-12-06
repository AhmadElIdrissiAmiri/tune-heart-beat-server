import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    postID: String,
    
  },
  { collection: "postLikes" }
);
export default schema;