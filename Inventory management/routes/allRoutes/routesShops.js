const express = require('express');
const router = express.Router();
const controllerShops = require('../../controller/shops/controllerShops');
router.get('/list',controllerShops.listShops);
router.get('/listByValue',controllerShops.listByValue);
router.post('/push',controllerShops.pushShop);
module.exports=router;