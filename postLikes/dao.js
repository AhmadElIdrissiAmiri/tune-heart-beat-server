import model from "./model.js";

export const findAllpostLikes = () => model.find();
export const createUserLikespost = (userId, postID) =>
  model.create({ user: userId, postID: postID });
export const findPostsUserLikes = (userId) => model.find({ user: userId });
export const findUsersThatLikePost = (postID) =>
  model.find({ songId: songId }).populate("user");