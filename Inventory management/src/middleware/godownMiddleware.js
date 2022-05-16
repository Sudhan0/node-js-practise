const express = require("express");
const godownData = require('../docs/godowns.json');
const responseBuilder = require('../../src/helper/responseBuilder');
function godownvalidator(req,res,next){
    let body = req.body;
    if(!body.name||!body.location){
            let resp = responseBuilder.validError();
            res.send(resp);
    }
    else{
        let num =1
        for(let elem of godownData){
            if(body.name.toLowerCase() == elem.name.toLowerCase() && body.location.toLowerCase() == elem.location.toLowerCase()){
                num = 2;  
            }
        }
        if(num==2){
            let resp = responseBuilder.valueExist();
            res.send(resp);
        }
        else{
        next();
        }
    }
}

module.exports ={
godownvalidator
}