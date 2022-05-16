const { query } = require('express');
const employeesData = require('../src/docs/emplyoees.json');
const responseBuilder = require('../src/helper/responseBuilder');
const commonHelper = require('../src/helper/commonHelper');
const constant = require('../src/helper/constant');
const fs = require('fs');
function getByValue(body){
    let result = [];
    for(let elem of employeesData){
        if(body.name){
            if(elem.name.toLowerCase()==body.name.toLowerCase())
                result.push(elem);
            }
        else if(body.age){
            if(elem.age==body.age)
            result.push(elem);
        }
        else if(body.workplace){
            if(elem.workplace.toLowerCase()==body.workplace.toLowerCase())
            result.push(elem);
        }
        else if(body.email){
            if(elem.email==body.email)
            result.push(elem);
        }
    }
    let resp = responseBuilder.list(result);
    return resp;
}
function login(body){
    let result = [];
    for(let elem of employeesData){
    if(elem.password.toLowerCase()==body.password.toLowerCase() && elem.email==body.email){
        result.push(elem);
        if(elem.role=='admin'){
            let token = encrypt(JSON.stringify({
                role:elem.role
            }))
            let res = {
                data:result,
                AuthToken:token
            }
            let resp = responseBuilder.list(res);
            return resp;
        }
        
        let resp = responseBuilder.list(result);
        return resp;
    }
}
}
function encrypt(body){
    let encryptedData = commonHelper.encrypt(JSON.stringify(body));
    let resp = responseBuilder.list(encryptedData);
    return resp;
}
function decrypt(body){
    let decryptedData = commonHelper.decrypt(body.encryptedData);
    let resp = responseBuilder.list(JSON.parse(decryptedData));
    return resp;
}

function assignRole(body){
    let id = body.id;
    let role = body.role;
    if(!id||!role){
        let resp = responseBuilder.validError();
        return resp
    }
    for(elem of employeesData){
        if(body.id){
            if(elem.id==id){
                elem['role'] =  role;
                let data = JSON.stringify(employeesData,null,2);
                fs.writeFile('src/docs/emplyoees.json',data,'utf-8',(err)=>{
                    if(err)
                    throw err
                })
                let resp = responseBuilder.validSuccess({
                    email: elem.email,
                    role:role
                });
                return resp;
            }
        }
        else{
            let resp = responseBuilder.loginFailed();
            return resp;
        }
    }

}


module.exports={
    getByValue,
    login,
    encrypt,
    decrypt,
    assignRole
}