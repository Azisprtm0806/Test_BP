const { Pelanggan } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  const pelanggan = await Pelanggan.findByPk(id, {
    attributes: ["id", "name", "tgl_lahir", "no_telp"],
  });

  if (!pelanggan) {
    return res.status(404).json({
      status: "error",
      message: "pelanggan not found.",
    });
  }

  return res.json({
    status: "success",
    data: pelanggan,
  });
};
