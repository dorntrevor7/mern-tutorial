const asyncHandler = require("excpress-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goals" });
});

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Upate goal ${req.params.id}` });
});

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delate goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  postGoals,
  updateGoals,
  deleteGoals,
};
