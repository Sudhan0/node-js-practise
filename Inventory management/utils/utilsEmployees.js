const { query } = require('express');
const employeesData = require('../src/docs/emplyoees.json');
const responseBuilder = require('../src/helper/responseBuilder');
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
    }
    let resp = responseBuilder.list(result);
    return resp;
}
    // for(elem of employeesData){
    //     let data=employeesData.find(employeesData=>employeesData.id==id);
    //     result.push(data);
    // }
     
    // return data;
    // for(let elem of employeesData){
    //   if(elem.id == id){
    //    // console.log(elem.id)
    //    result.push(employeesData.);  
    //     return result
    //   }
        
    // }



module.exports={
    getByValue
}