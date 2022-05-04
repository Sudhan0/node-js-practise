const express = require('express');
const router = express.Router();
const controllerEmployee = require('../../controller/employees/controllerEmployees');
router.get('/list',controllerEmployee.listEmployee);
router.get('listByValue',controllerEmployee.listbyValue)
router.post('/push',controllerEmployee.pushEmployee);
module.exports=router;