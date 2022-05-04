const express = require('express');
const router = express.Router();
const controllerMedicine = require('../../controller/medicines/controllerMedicines');
router.get('/list',controllerMedicine.listMedicine);
router.get('/listByValue',controllerMedicine.listbyValue);
router.post('/push',controllerMedicine.pushMedicines);
module.exports=router;