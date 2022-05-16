const express = require('express');
const router = express.Router();
const controllerGodowns = require('../../controller/godowns/controllerGodowns');
const godownMiddleware =  require('../../src/middleware/godownMiddleware');
router.get('/list',controllerGodowns.listGodown);
router.get('/listByValue',controllerGodowns.listByValue);
router.post('/push',godownMiddleware.godownvalidator,controllerGodowns.pushGodown);

module.exports=router;