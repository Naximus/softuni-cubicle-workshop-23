const router = require('express').Router();

const homeCotroller = require('./controllers/homeController');
const cubController = require('./controllers/cubeController');

router.get('/', homeCotroller.getHomePage);
router.get('/about', homeCotroller.getAboutPage)


router.get('/create', cubController.getCreateCube);

module.exports= router;