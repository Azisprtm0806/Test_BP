const bcrypt = require("bcrypt");
const { Pelanggan } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;
  const pelanggan = await Pelanggan.findByPk(id);

  if (!pelanggan) {
    return res.status(404).json({
      status: "error",
      message: "Pelanggan not found.",
    });
  }

  const name = req.body.name;
  if (name) {
    const cekName = await Pelanggan.findOne({
      where: { name: name },
    });

    if (cekName && name !== pelanggan.name) {
      return res.status(409).json({
        status: "error",
        message: "Name already exists.",
      });
    }
  }

  let passwordHash;
  if (req.body.password) {
    passwordHash = await bcrypt.hash(req.body.password, 10);
  }

  const { no_telp, tgl_lahir } = req.body;

  await pelanggan.update({
    name,
    password: passwordHash,
    no_telp,
    tgl_lahir,
  });

  return res.json({
    status: "success",
    data: {
      id: pelanggan.id,
      name,
      no_telp,
      tgl_lahir,
    },
  });
};
