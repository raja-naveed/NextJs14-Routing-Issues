import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Raja Naveed"
  },
  shortDescription: {
    type: String,
    default: "Short description goes here"
  },
  description: {
    type: String,
    default: "Detailed description goes here"
  },
  image: {
    type: String,
    default: "Default image URL goes here"
  },
  team: {
    type: String,
    default: "Default team name goes here"
  },
  techStack: {
    type: String,
    default: "Default tech stack goes here"
  },
  visibility: {
    type: String,
    default: "public" 
  },
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
