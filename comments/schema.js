import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    
    content: { type: String, required: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    postID: { type: mongoose.Schema.Types.ObjectId, ref: "posts", required: true },
    
  },
  { collection: "comments" } 
);

export default schema;