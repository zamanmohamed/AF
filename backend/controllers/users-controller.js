const User = require("../models/user");
const HttpError = require("../models/http-error");

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Apple",
    description: "freash apple",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Mango",
    description: "freash mango!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Banana",
    description: "freash banana",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Papaya",
    description: "freash papaya",
    price: 18.99,
  },
];

const getUsers = (req, res, next) => {
  res.json(DUMMY_MEALS);
};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const exisitingUser = await User.findOne({ email: email });

  if (exisitingUser) {
    console.error("Email used in already");
  } else {
    const createUser = new User({ name, password, email, image: "image" });
    await createUser.save();
    res.status(201).json({ User: createUser });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser = await User.findOne({ email: email });

  if (!existingUser || existingUser.password !== password) {
    res.json({ message: "Error" });
  } else {
    res.json({ message: "Logged in!" });
  }
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
