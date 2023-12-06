import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    commentID: String,
    
  },
  { collection: "commentLikes" }
);
export default schema;