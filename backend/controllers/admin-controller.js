const Admin = require("../models/admin");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const exisitingAdmin = await Admin.findOne({ email: email });

  if (exisitingAdmin) {
    console.error("Email used in already");
  } else {
    const createAdmin = new Admin({ name, email, password });
    await createAdmin.save();
    res.status(201).json({ Admin: createAdmin });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser = await Admin.findOne({ email: email });

  if (!existingUser || existingUser.password !== password) {
    res.json({ message: "Error" });
  } else {
    res.json({ message: "Logged in!" });
  }
};

const updateAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;
  const adminId = req.params.id;

  const updateAdmin = await Admin.findById(adminId);

  updateAdmin.name = name;
  updateAdmin.email = email;
  updateAdmin.password = password;

  await updateAdmin.save();

  res.status(200).json({ Admin: updateAdmin });
};

const deleteAdmin = async (req, res, next) => {
  const adminId = req.params.id;
  const deleteAdmin = await Admin.findById(adminId);

  await deleteAdmin.remove();

  res.status(200).json({ Admin });
};

exports.signup = signup;
exports.login = login;
exports.updateAdmin = updateAdmin;
exports.deleteAdmin = deleteAdmin;
