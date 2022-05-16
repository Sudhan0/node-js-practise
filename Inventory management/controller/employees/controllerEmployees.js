const express = require('express');
const employeesData = require('../../src/docs/emplyoees.json');
const responseBuilder = require('../../src/helper/responseBuilder');
const utilsEmployees = require('../../utils/utilsEmployees');
const constant = require('../../src/helper/constant');
const logger = require('../../src/helper/logger');
const employeeMiddleware = require('../../src/middleware/employeeMiddleware');
// const utils = require('nodemon/lib/utils');
function listEmployee(request,response){
        response.send(responseBuilder.list(employeesData));
}
function listbyValue(request,response){
    let data = utilsEmployees.getByValue(request.body);
    response.send(responseBuilder.list(data));
}
function pushEmployee(request,response){
    let path = 'src/docs/emplyoees.json';
    logger.message(constant.employeePost);
    let data = request.body;
    data['id']=employeesData.length+1;
    data['name']=request.body.name.charAt(0).toUpperCase()+request.body.name.substring(1);
    data['role']="user";
    employeesData.push(data);
    response.send(responseBuilder.push(employeesData,path,data));
}
function login(request,response){
    console.log(request.body);
    response.send(utilsEmployees.login(request.body));
}
function encrypt(request,response){
    let data = utilsEmployees.encrypt(request.body);
    response.send(data);
}
function decrypt(request,response){
    let data = utilsEmployees.decrypt(request.body); 
    response.send(data);
}

function assignRole(request,response){
    let data = utilsEmployees.assignRole(request.body);
    response.send(data);
}
module.exports={
    listEmployee,
    pushEmployee,
    listbyValue,
    login,
    encrypt,
    decrypt,
    assignRole
}