const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Pelanggan } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    name: { type: "string", empty: false },
    password: { type: "string", min: 6 },
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const pelanggan = await Pelanggan.findOne({
    where: { name: req.body.name },
  });

  if (!pelanggan) {
    return res.status(404).json({
      status: "error",
      message: "invalid name or password.",
    });
  }

  const isValidPassword = await bcrypt.compare(
    req.body.password,
    pelanggan.password
  );

  if (!isValidPassword) {
    return res.status(401).json({
      status: "error",
      message: "Invalid credentials.",
    });
  }

  const token = jwt.sign(
    { id: pelanggan.id, name: pelanggan.name },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return res.json({
    status: "success",
    data: {
      token: token,
      id: pelanggan.id,
      uuid: pelanggan.uuid,
      name: pelanggan.name,
      tgl_lahir: pelanggan.tgl_lahir,
      no_telp: pelanggan.no_telp,
    },
  });
};
