const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { Pelanggan } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const schema = {
      name: { type: "string", empty: false },
      no_telp: { type: "string", empty: false },
      password: { type: "string", min: 6 },
    };

    const validate = v.validate(req.body, schema);

    if (validate.length) {
      return res.status(400).json({
        status: "error",
        message: validate,
      });
    }

    const existingPelanggan = await Pelanggan.findOne({
      where: { name: req.body.name },
    });

    if (existingPelanggan) {
      return res.status(409).json({
        status: "error",
        message: "Name already exists.",
      });
    }

    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const data = {
      password: passwordHash,
      uuid: uuidv4(),
      name: req.body.name,
      no_telp: req.body.no_telp,
      tgl_lahir: req.body.tgl_lahir,
      created_at: Date.now(),
    };

    const createdPelanggan = await Pelanggan.create(data);

    return res.json({
      status: "success",
      data: {
        id: createdPelanggan.id,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
};
