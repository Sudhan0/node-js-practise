const express = require('express');
// const res = require('express/lib/response');
const utilsEmployees = require('../../utils/utilsEmployees');
const employeesData = require('../docs/emplyoees.json');
const responseBuilder = require('../helper/responseBuilder');
// const common = require('./commonMiddleware')
function signUpValidator(req,res,next){
    let body = req.body;
    if(!body.name||!body.dob||!body.email||!body.password){
        let resp = responseBuilder.validError();
        res.send(resp);
    }
    else{
        let num =1;
        let result;
        for(let elem of employeesData){
                if(elem.email.toLowerCase()==body.email.toLowerCase()){
                    let resp = responseBuilder.valueExist(elem.email);
                    num =2;
                    result = resp;
                }
            }
        if(num==2){
            res.send(result);
        }
        else{
            next();
        }
    }
   
}

function login(req,res,next){
    let body = req.body;
    console.log(body);
    let userflag = 0;
    for(let elem of employeesData){
        console.log(elem.email)
        console.log(elem.password)
        // if(elem.password==body.password && elem.email==body.email){
        // next();
        // }
        if(elem.email==body.email){
            console.log(elem);
            userflag = 1;
            if(elem.password==body.password && elem.email==body.email){
                next();
            }
        }
    }
        if(userflag==0){
            let resp =responseBuilder.emailError();
            res.send(resp);
        }
        else{
            let resp =responseBuilder.password();
            res.send(resp)
        }
}

module.exports={
    signUpValidator,
    login
}
