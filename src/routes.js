const router = require('express').Router();

const homeCotroller = require('./controllers/homeController');
const cubController = require('./controllers/cubeController');

router.get('/', homeCotroller.getHomePage);
router.get('/about', homeCotroller.getAboutPage);
router.get('/404', homeCotroller.getErrorPage)


router.get('/create', cubController.getCreateCube);
router.post('/create', cubController.postCreateCube);
router.get('/details/:cubeId', cubController.getDetails);

module.exports= router;