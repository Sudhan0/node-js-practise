const utilsPing = require('../../utils/ping');
const fs = require('fs');
let medicineData = require('../docs/medicines.json');
// const utils = require('nodemon/lib/utils');
function list(data){
    let result = {
        "code":200,
        "message":"The result",
        "data":data
    }
    return result;
 }

// function push(data,path){
//     let val = JSON.stringify(data);
//     console.log(val);
//     let result = {
//         "code":200,
//         "message":"The result",
//         "data": fs.writeFile(path,val,'utf8',(err)=>{
//             if(err)
//             console.log(err);
//             else
//             return val
//         })
//     }
//     return result;
// }
function push(data,path){
   // medicineData.push(data);
    utilsPing.add(path,data);
    let result = {
        "code":200,
        "message":"The result",
        "data": "Added succesfully"
    }
    return result;
}

module.exports={
    list,
    push,
    // push1
}