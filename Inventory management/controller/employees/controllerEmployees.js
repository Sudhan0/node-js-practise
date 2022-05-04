const { json } = require('body-parser');
const express = require('express');
const employeesData = require('../../src/docs/emplyoees.json');
const responseBuilder = require('../../src/helper/responseBuilder');
function listEmployee(request,response){
        response.send(responseBuilder.list(employeesData));
}
function listbyValue(request,response){
        let data=employeesData.find(employeesData=>employeesData.id==request.query.id);
        response.send(responseBuilder.list(data));
}
function pushEmployee(request,response){
    let path = 'src/docs/emplyoees.json';
    console.log('posting employee');
    //console.log(request.body);
    let data = request.body;
    employeesData.push(data);
   // console.log(typeof data);
    response.send(responseBuilder.push(employeesData,path));
}
module.exports={
    listEmployee,
    pushEmployee,
    listbyValue
}