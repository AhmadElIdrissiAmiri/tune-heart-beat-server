import model from "./model.js";

export const findAllPosts = () => model.find();

export const createPost = async (userId, post) => {
  const createdPost = await model.create({ user: userId, ...post });
  return createdPost;
};

export const findPostsByUser = (userId) => model.find({ user: userId });

export const updatePost = async (post) => {
  const { _id, ...updatedFields } = post;
  const updatedPost = await model.updateOne({ _id }, { $set: updatedFields });
  return updatedPost;
};

export const deletePost = async (postId) => {
  const deletedPost = await model.deleteOne({ _id: postId });
  return deletedPost;
};
export const fetchPostById = async (postId) => {
  const post = await model.findById(postId);
  return post;
};