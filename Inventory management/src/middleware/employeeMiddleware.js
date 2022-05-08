const express = require('express');
const utilsEmployee = require('../../utils/utilsEmployees');
const employeesData = require('../docs/emplyoees.json');
const responseBuilder = require('../helper/responseBuilder');

function signUpValidator(req,res,next){
    let body = req.body;
    if(!body.name||!body.dob||!body.email||!body.password){
        let resp = responseBuilder.validError();
        res.send(resp);
    }
    else if(req.body){
        for(let elem of employeesData){
            if(elem.email.toLowerCase()==req.body.email.toLowerCase()){
                let resp = responseBuilder.valueExist(elem.email);
                res.send(resp);
            }
        }
    }
    next();
}

module.exports={
    signUpValidator
}