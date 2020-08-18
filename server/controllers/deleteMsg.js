const MSGS = require('../models/msgModel');
module.exports = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const del = await MSGS.deleteOne({ _id: id });
    console.log(del);
    return res.status(200).json({});
  } catch (err) {
    return res.status(500);
  }
};
