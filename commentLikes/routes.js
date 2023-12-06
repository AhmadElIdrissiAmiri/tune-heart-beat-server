import * as dao from "./dao.js";

function CommentLikesRoute(app) {
  const findAllcommentLikes = async (req, res) => {
    const likes = await dao.findAllcommentLikes();
    res.send(likes);
  };
  
  const createUserLikescomment = async (req, res) => {
    try {
      const { userId, commentID } = req.params;
      console.log("Received request to like comment. User ID:", userId, "Comment ID:", commentID);
  
      // Rest of your implementation...
  
      res.send(like);
    } catch (error) {
      console.error("Error creating user likes comment:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  };
  
  

  const findCommentsUserLikes = async (req, res) => {
    const { userId } = req.params;
    const likes = await dao.findCommentsUserLikes(userId);
    res.send(likes);
  };

  const findUsersThatLikeComment = async (req, res) => {
    const { commentID } = req.params;
    const likes = await dao.findUsersThatLikeComment(commentID);
    res.send(likes);
  };

 
  app.get("/api/commentLikes", findAllcommentLikes);
  app.post("/api/users/:userId/commentLikes/:commentID", createUserLikescomment);
  app.get("/api/users/:userId/commentLikes", findCommentsUserLikes);
  app.get("/api/commentLikes/:postID/users", findUsersThatLikeComment);
  

}
export default CommentLikesRoute;