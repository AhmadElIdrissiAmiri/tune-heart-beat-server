import * as dao from "./dao.js";

function PostRoutes(app) {
  const findAllPosts = async (req, res) => {
    const posts = await dao.findAllPosts();
    res.send(posts);
  };

  const createPost = async (req, res) => {
    const { userId } = req.params;
    const post = req.body; // Assuming you send the post data in the request body
    const createdPost = await dao.createPost(userId, post);
    res.send(createdPost);
  };

  const findPostsByUser = async (req, res) => {
    const { userId } = req.params;
    const posts = await dao.findPostsByUser(userId);
    res.send(posts);
  };

  const updatePost = async (req, res) => {
    const postId = req.params.postId;
    const updatedPostData = req.body; // Assuming you send the updated post data in the request body
    const updatedPost = await dao.updatePost(postId, updatedPostData);
    res.send(updatedPost);
  };

  const deletePost = async (req, res) => {
    const { postId } = req.params;
    const deletedPost = await dao.deletePost(postId);
    res.send(deletedPost);
  };

  const fetchPostById = async (req, res) => {
    const { postId } = req.params;
    const post = await dao.fetchPostById(postId);
    res.send(post);
  };

  app.get("/api/posts", findAllPosts);
  app.post("/api/users/:userId/posts", createPost);
  app.get("/api/users/:userId/posts", findPostsByUser);
  app.put("/api/posts/:postId", updatePost);
  app.get("/api/posts/:postId", fetchPostById); // Add this line for fetchPostById

  app.delete("/api/posts/:postId", deletePost);
}

export default PostRoutes;
