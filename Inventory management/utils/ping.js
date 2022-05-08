const fs = require('fs')
function add(path,data){
    let val = JSON.stringify(data,null ,2);
    console.log(val);
   fs.writeFile(path,val,'utf8',(err)=>{
        if(err)
        console.log(err);
        return val
    })
}
module.exports={
    add
    // readData
}