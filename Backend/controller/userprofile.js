import User from "../models/User";

export const userprofile = async (req, res) => {
  try {
    await User.findById({ _id: req.body._id }, req.body);
    const user = await User.findOne({ _id: req.param._id });
    res.send(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body._id }, req.body);
    const user = await User.findOne({ _id: req.body._id });
    res.send(user);
  } catch (error) {
    res.status(400).json(error);
  }
};
