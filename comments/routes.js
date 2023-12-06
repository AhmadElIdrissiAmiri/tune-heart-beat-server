import * as commentsDao from "./dao.js";

function CommentsRoutes(app) {
  const findAllComments = async (req, res) => {
    const comments = await commentsDao.findAllComments();
    res.send(comments);
  };

  const createComment = async (req, res) => {
    const { postId } = req.params;
    const comment = req.body;
    const createdComment = await commentsDao.createComment(postId, comment);
    res.send(createdComment);
  };
  

  const findCommentsByPost = async (req, res) => {
    const { postId } = req.params;
    const comments = await commentsDao.findCommentsByPost(postId);
    res.send(comments);
  };

  const updateComment = async (req, res) => {
    const comment = req.body;
    const updatedComment = await commentsDao.updateComment(comment);
    res.send(updatedComment);
  };

  const deleteComment = async (req, res) => {
    const { commentId } = req.params;
    const deletedComment = await commentsDao.deleteComment(commentId);
    res.send(deletedComment);
  };

  app.get("/api/comments", findAllComments);
  app.post("/api/posts/:postId/comments", createComment);
  app.get("/api/posts/:postId/comments", findCommentsByPost);
  app.put("/api/comments", updateComment);
  app.delete("/api/comments/:commentId", deleteComment);
}

export default CommentsRoutes;
