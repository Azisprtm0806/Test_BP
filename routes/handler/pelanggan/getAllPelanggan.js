const { Pelanggan } = require("../../../models");

module.exports = async (req, res) => {
  const userIds = req.query.pelanggan || [];

  const sqlOptions = {
    attributes: ["id", "name", "tgl_lahir", "no_telp"],
  };

  if (userIds.length) {
    sqlOptions.where = {
      id: userIds,
    };
  }

  const pelanggans = await Pelanggan.findAll(sqlOptions);

  return res.json({
    status: "success",
    data: pelanggans,
  });
};
