const express = require('express');
const commonHelper = require('../helper/commonHelper');
const responseBuilder = require('../helper/responseBuilder')
function decryption(req,res,next){
    let body = req.body;
    if(!body.encryptedData){
        let resp = responseBuilder.validError();
        res.send(resp);
    }
    else{
        console.log('decryption');
        req.body = JSON.parse(commonHelper.decrypt(body.encryptedData))
    next();
    }
}
// function encryption(req,res,next){   
//     req.body = JSON.parse(commonHelper.encrypt(req.body));
//     next();

// }

module.exports={
    decryption
  //  encryption
}