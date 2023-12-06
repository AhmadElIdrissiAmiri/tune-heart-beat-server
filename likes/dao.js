import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesAlbum = (userId, albumId) =>
  model.create({ user: userId, albumId: albumId });
export const findAlbumsThatUserLikes = (userId) => model.find({ user: userId });
export const findUsersThatLikeAlbum = (albumId) =>
  model.find({ albumId: albumId }).populate("user");