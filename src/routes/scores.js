/**
 * Route to create a user. Returns the new user in the payload
 */
// export const create = route(async (req, res) => {
//   //   const { name, password } = req.body;
//   const newScore = await createScore();
//   res.send({ data: newScore });
// });

/**
 * Route to list out all users. Returns a list of all users in the payload.
 */
import ScoreModel from "../db/Scores";
export const list = async (req, res) => {
  const ScoreModelObj = new ScoreModel();
  console.log("here");
  const scores = await ScoreModelObj.list();
  res.send(scores ? scores : "Nodata");
};
export const saveScore = async (req, res) => {
  console.log("pppp");
  const ScoreModelObj = new ScoreModel();
  const score = await ScoreModelObj.create();
  console.log(score);
  res.send(score);
};

// export const getScoresOfUser = route(async (req, res) => {
//   const id = req.body.userID;
//   const user = await UserDB.getUserById(id);
//   res.send({ user });
// });
