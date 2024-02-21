const express = require('express');
const router = express.Router();

const {getAllDetails,getAllDetailsTesting}=require('../controllers/products');

router.route("/").get(getAllDetails);
router.route("/testing").get(getAllDetailsTesting);

module.exports=router;