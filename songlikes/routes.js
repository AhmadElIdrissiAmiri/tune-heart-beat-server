import * as dao from "./dao.js";

function SongLikesRoutes(app) {
  const findAllLikes = async (req, res) => {
    const likes = await dao.findAllLikes();
    res.send(likes);
  };
  
  const createUserLikesSong = async (req, res) => {
    const { userId, songId } = req.params;
    const like = await dao.createUserLikesSong(userId, songId);
    res.send(like);
  };

  const findSongsThatUserLikes = async (req, res) => {
    const { userId } = req.params;
    const likes = await dao.findSongsThatUserLikes(userId);
    res.send(likes);
  };

  const findUsersThatLikeSong = async (req, res) => {
    const { songId } = req.params;
    const likes = await dao.findUsersThatLikeSong(songId);
    res.send(likes);
  };

  const deleteUserLikesSong = async (userId, songId) => {
   
  };
  app.get("/api/songlikes", findAllLikes);
  app.post("/api/users/:userId/songlikes/:songId", createUserLikesSong);
  app.get("/api/users/:userId/songlikes", findSongsThatUserLikes);
  app.get("/api/songlikes/:songId/users", findUsersThatLikeSong);
  app.delete("/api/users/:userId/songlikes/:songId", deleteUserLikesSong);

}
export default SongLikesRoutes;