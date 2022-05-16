const express = require('express');
const res = require('express/lib/response');
const shopData = require('../src/docs/shops.json');
const responseBuilder = require('../src/helper/responseBuilder');

function getByValue(body){
    let result =[];
    for(let elem of shopData){
        if(body.name){
            if(elem.name.toLowerCase()==body.name.toLowerCase())
            result.push(elem);
        }
        else if(body.id){
            if(body.id==elem.id)
            result.push(elem);
        }
        else if(body.location){
            if(elem.location.toLowerCase()==body.location.toLowerCase())
            result.push(elem);
        }
    }
    let resp = responseBuilder.list(result);
    return resp

}
module.exports={
    getByValue
}