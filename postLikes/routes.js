import * as dao from "./dao.js";

function PostLikesRoute(app) {
  const findAllpostLikes = async (req, res) => {
    const likes = await dao.findAllpostLikes();
    res.send(likes);
  };
  
  const createUserLikespost = async (req, res) => {
    const { userId, postID } = req.params;
    const like = await dao.createUserLikespost(userId, postID);
    res.send(like);
  };

  const findPostsUserLikes = async (req, res) => {
    const { userId } = req.params;
    const likes = await dao.findPostsUserLikes(userId);
    res.send(likes);
  };

  const findUsersThatLikePost = async (req, res) => {
    const { postID } = req.params;
    const likes = await dao.findUsersThatLikePost(postID);
    res.send(likes);
  };

 
  app.get("/api/postLikes", findAllpostLikes);
  app.post("/api/users/:userId/postLikes/:postID", createUserLikespost);
  app.get("/api/users/:userId/postLikes", findPostsUserLikes);
  app.get("/api/postLikes/:postID/users", findUsersThatLikePost);
  

}
export default PostLikesRoute;