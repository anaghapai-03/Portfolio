import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  icon: String,
  title: String,
  content: String
});

export default mongoose.model("Card", CardSchema);
