import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesSong = (userId, songId) =>
  model.create({ user: userId, songId: songId });
export const findSongsUserLikes = (userId) => model.find({ user: userId });
export const findUsersThatLikeSong = (songId) =>
  model.find({ songId: songId }).populate("user");
