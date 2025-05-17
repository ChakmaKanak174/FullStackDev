//@desc get goals
//@route GET /api/goals
//@access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "get goals" });
};

//@desc add goals
//@route POST /api/goals
//@access Private
const setGoals = (req, res) => {
  res.status(200).json({ message: "add goals" });
};

//@desc updtae goals
//@route PUT /api/goals/:id
//@access Private
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

//@desc delete goals
//@route DELETE /api/goals
//@access Private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
