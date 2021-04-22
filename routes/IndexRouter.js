const express = require('express');
const { renderHomeView } = require('../controllers/IndexController');
const router = express.Router();

/* GET home page. */
router.get('/',renderHomeView );

module.exports = router;
