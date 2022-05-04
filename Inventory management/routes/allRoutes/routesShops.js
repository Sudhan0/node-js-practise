const express = require('express');
const router = express.Router();
const controllerShops = require('../../controller/shops/controllerShops');
router.get('/list',controllerShops.listShops);

module.exports=router;