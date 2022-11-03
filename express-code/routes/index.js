var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'First Express App', subtitle: "Hello world" });
});
router.get('/test', function (req, res, next) {
  res.render('index', { title: 'First Express App - Test', subtitle: "Hello world test" });
});
router.get('/testing', function (req, res, next) {
  var courseName = req.query.course
  let courseTitle = "First Express App - " + courseName
  res.render('index', { title: courseTitle, subtitle: "Hello world testing" });
});

module.exports = router;
