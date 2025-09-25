// routes/index.js
// Home page route 
// Renders a simple view (test.jade) used as the landing page.

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Render the `test` view with a title variable available to the template
  res.render('home', { title: 'Home' });
});

module.exports = router;
