import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
   
    content: { type: String, required: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    
  },
  { collection: "posts" } 
);

export default schema;
