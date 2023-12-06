import model from "./model.js";

export const findAllComments = () => model.find();

export const createComment = async (postId, comment) => {
  const createdComment = await model.create({ post: postId, ...comment });
  return createdComment;
};

export const findCommentsByPost = (postId) => model.find({ post: postId });

export const updateComment = async (comment) => {
  const { _id, ...updatedFields } = comment;
  const updatedComment = await model.updateOne({ _id }, { $set: updatedFields });
  return updatedComment;
};

export const deleteComment = async (commentId) => {
  const deletedComment = await model.deleteOne({ _id: commentId });
  return deletedComment;
};
