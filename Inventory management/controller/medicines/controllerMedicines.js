const medicineData = require('../../src/docs/medicines.json');
const express =  require('express');
const responseBuilder =  require('../../src/helper/responseBuilder');
function listMedicine(request,response){
    console.log('Listed medicines');
    response.send(responseBuilder.list(medicineData));
}
function listbyValue(request,response){
    let data= medicineData.find((medicineData)=>medicineData.id == request.query.id);
    response.send(responseBuilder.list(data));
}
function pushMedicines(request,response){
    let path = 'src/docs/medicines.json';
    console.log('posting Medicines');
    let data = request.body;
    data['id']=medicineData.length+1;
   // console.log(request.body);
   medicineData.push(data);
    response.send(responseBuilder.push(medicineData,path));
}

module.exports={
listMedicine,
listbyValue,
pushMedicines
}