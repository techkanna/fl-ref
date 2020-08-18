const MSGS = require('../models/msgModel');
module.exports = async (req, res) => {
  // const { name, msg } = req.body;

  try {
    const MSG = await MSGS.create(req.body);
    console.log(MSG);
    return res.status(201).json({ msg: MSG });
  } catch (error) {
    return res.status(500);
  }
};
