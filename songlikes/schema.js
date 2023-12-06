import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    songId: String,
    
  },
  { collection: "songlikes" }
);
export default schema;