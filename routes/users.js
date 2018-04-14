var express = require('express');
var router = express.Router();
var qualityAuth = require('../service/quality_auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getQualityAuthData',function(req, res, next){
	qualityAuth.getQualityAuthData(req, res, next)
});

module.exports = router;
