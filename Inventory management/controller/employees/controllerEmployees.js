const express = require('express');
const employeesData = require('../../src/docs/emplyoees.json');
const responseBuilder = require('../../src/helper/responseBuilder');
const utilsEmployees = require('../../utils/utilsEmployees')
const constant = require('../../src/helper/constant');
const logger = require('../../src/helper/logger');
function listEmployee(request,response){
        response.send(responseBuilder.list(employeesData));
}
function listbyValue(request,response){
    console.log(request.body);
     let data = utilsEmployees.getByValue(request.body);
     console.log(data);
        response.send(responseBuilder.list(data));
}
function pushEmployee(request,response){
    let path = 'src/docs/emplyoees.json';
    logger.message(constant.employeePost);
    let data = request.body;
    data['id']=employeesData.length+1;
    data['name']=request.body.name.charAt(0).toUpperCase()+request.body.name.substring(1);
    employeesData.push(data);
    response.send(responseBuilder.push(employeesData,path));
}
module.exports={
    listEmployee,
    pushEmployee,
    listbyValue
}