const utilsPing = require('../../utils/ping');
const fs = require('fs');
const logger = require('../helper/logger');
//let medicineData = require('../docs/medicines.json');
function list(data){
    let result = {
        "code":200,
        "message":"The result",
        "data":data
    }
    return result;
 }
function push(data,path){
    utilsPing.add(path,data);
    let result = {
        "code":200,
        "message":"The data added succesfully",
        "data" :[
            {
                data
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

function valueExist(value){
    let message = `The given value ${value} already exists`;
    let error = logger.validationError(message);
    return error;
}

module.exports={
    list,
    push,
    validError,
    valueExist
}