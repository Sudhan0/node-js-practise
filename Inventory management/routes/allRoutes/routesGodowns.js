const express = require('express');
const router = express.Router();
const controllerGodowns = require('../../controller/godowns/controllerGodowns');
router.get('/list',controllerGodowns.listGodown);

module.exports=router;