const MSGS = require('../models/msgModel');

module.exports = async (req, res) => {
  try {
    const msgs = await MSGS.find();
    return res.status(200).json({
      data: msgs
    });
  } catch (error) {
    return res.status(500);
  }
};
