import model from "./model.js";



export const userFollowsUser = (followerId, followedId) =>
  model.create({ follower: followerId, followed: followedId });
export const UserUnfollowsUser = (followerId, followedId) =>
  model.deleteOne({ follower: followerId, followed: followedId });

export const findFollowersOfUser = (followed) =>
  model.find({ followed  }).populate("follower");

export const findFollowedUsersByUser = (follower) =>
  model.find({ follower }).populate("followed");


