import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {
    
    const likes = await dao.findAllLikes();
    res.send(likes);
  };
  const createUserLikesAlbum = async (req, res) => {
    const { userId, albumId } = req.params;
    const like = await dao.createUserLikesAlbum(userId, albumId);
    res.send(like);
  };
  const findAlbumsThatUserLikes = async (req, res) => {
    const { userId } = req.params;
    const likes = await dao.findAlbumsThatUserLikes(userId);
    res.send(likes);
  };
  const findUsersThatLikeAlbum = async (req, res) => {
    const { albumId } = req.params;
    const likes = await dao.findUsersThatLikeAlbum(albumId);
    res.send(likes);
  };
 const deleteUserLikesAlbum = async (userId, albumId) => {};

  app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:albumId", createUserLikesAlbum);
  app.get("/api/users/:userId/likes", findAlbumsThatUserLikes);
  app.get("/api/likes/:albumId/users", findUsersThatLikeAlbum);
  app.delete("api/users/:userId/likes/:albumId", deleteUserLikesAlbum);

}


export default LikesRoutes;






