const express = require('express');
const router = express.Router();
const routesGodown = require('./allRoutes/routesGodowns');
const routesMedicines = require("./allRoutes/routesMedicines");
const routesShops = require('./allRoutes/routesShops');
const routesEmployees = require('./allRoutes/routesEmplyoees');
router.use('/godowns',routesGodown);
router.use('/medicines',routesMedicines);
router.use('/shops',routesShops);
router.use('/employees',routesEmployees);
module.exports=router;