const utilsPing = require('../../utils/ping');
const fs = require('fs');
const logger = require('../helper/logger');
const constant = require('../helper/constant')
//let medicineData = require('../docs/medicines.json');
function list(data){
    if(data==0){
        let result = {
            "code":400,
            "message":"The does not exist"
        }
        return result;
    }
    let result = {
        "code":200,
        "message":"The result",
        "data":data
    }
    return result;
 }
 function valueNotExist(){
    let result = {
        "code":400,
        "message":"The value does not exist",
    }
    return result
}
function push(data,path,newData){
    utilsPing.add(path,data);
    let result = {
        "code":200,
        "message":"The data added succesfully",
        "data" :[
            {
                newData
            }
        ]
    }
    return result;
}

function validError(){
    let message = 'The given data is not sufficient!';
    let error = logger.validationError(message);
    return error;
}
function password(){
    let message = 'Incorrect password!';
    let error = logger.validationError(message);
    return error;
}
function emailError(){
    let message = "User doesn't exist";
    let error = logger.validationError(message);
    return error;
}

function valueExist(value){
    let message = `The given user ${value} already exists`;
    let error = logger.validationError(message);
    return error;
}
function success(){
    let message = "Successful!"
    return message;
}
function validSuccess(message){
    return message;
}
function loginFailed(){
    let message = logger.validationError(constant.loginError);
    return message;
}

module.exports={
    list,
    push,
    validError,
    valueExist,
    success,
    loginFailed,
    password,
    emailError,
    valueNotExist,
    validSuccess
}