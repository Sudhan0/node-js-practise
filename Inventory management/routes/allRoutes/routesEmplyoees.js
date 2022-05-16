const express = require('express');
const router = express.Router();
const controllerEmployee = require('../../controller/employees/controllerEmployees');
const employeeMiddleware = require('../../src/middleware/employeeMiddleware');
const commonMiddleware = require('../../src/middleware/commonMiddleware');

router.post('/signUp',commonMiddleware.decryption,employeeMiddleware.signUpValidator,controllerEmployee.pushEmployee);
router.post('/login',commonMiddleware.decryption,employeeMiddleware.login,controllerEmployee.login);
router.get('/list',controllerEmployee.listEmployee);
router.get('/listByValue',controllerEmployee.listbyValue);
router.post('/push',controllerEmployee.pushEmployee);
router.post('/encrypt',controllerEmployee.encrypt);
router.post('/decrypt',controllerEmployee.decrypt);
router.post('/assignRole',controllerEmployee.assignRole)
module.exports=router;
// commonMiddleware.decryption
// employeeMiddleware.login,