const express = require('express');
const getAllMsgs = require('../controllers/getAllmsgs');
const addmsg = require('../controllers/addMsg');
const deleteMsg = require('../controllers/deleteMsg');
const router = express.Router();

router
  .route('/')
  .get(getAllMsgs)
  .post(addmsg);

router.route('/:id').delete(deleteMsg);

module.exports = router;
