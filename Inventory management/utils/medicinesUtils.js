const { query } = require('express');
const medicineData = require('../src/docs/medicines.json');
const responseBuilder = require('../src/helper/responseBuilder');
const commonHelper = require('../src/helper/commonHelper');
function getByValue(body){
    let result = [];
    for(let elem of medicineData){
        if(body.name){
            if(elem.name.toLowerCase()==body.name.toLowerCase())
                result.push(elem);
            }
        else if(body.id){
            if(elem.id==body.id)
                result.push(elem);
        }
        else if(body['expiry date']){
            if(elem['expiry date']==body['expiry date'])
            result.push(elem);
        }
        else if(body['manufacture date']) {
            if(elem['manufacture date']==body['manufacture date'])
            result.push(elem)
        }
        else if(body.company){
            if(body.company==elem.company)
            result.push(elem)
        }
        else if(body['unit price']){
            if(elem['unit price']==body['unit price'])
            result.push(elem)
        }
    }
    let resp = responseBuilder.list(result);
    return resp;
}

function getExpiredMedi(date){
    let result= [];
    var exp;
    for(let elem of medicineData){
        exp = elem['expiry date'];
        let date1 = new Date(exp);
        let date2 = new Date(date);
        console.log(date1)
        if(date1<date2){
            console.log('result')
            result.push(elem);
        }
    }
    let resp = responseBuilder.list(result);
    return resp
}
module.exports={
    getByValue,
    getExpiredMedi
}