const router = require('express').Router();
const homeController = require('./controllers/home-controller');
const authController = require('./controllers/auth-controller');

router.use(homeController);
router.use(authController)
module.exports = router