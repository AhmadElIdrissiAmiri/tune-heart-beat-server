import model from "./model.js";

export const findAllcommentLikes = () => model.find();
export const createUserLikescomment = (userId, commentID) =>
  model.create({ user: userId, commentID: commentID });
export const findCommentsUserLikes = (userId) => model.find({ user: userId });
export const findUsersThatLikeComment = (commentID) =>
  model.find({ commentID: commentID }).populate("user");