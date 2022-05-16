const godownData = require('../../src/docs/godowns.json');
const express = require('express');
const godownUtils = require('../../utils/godownUtils')
const responseBuilder = require('../../src/helper/responseBuilder');
function listGodown(request,response){
    console.log('Listing godowns');
    response.send(responseBuilder.list(godownData));
}
function listByValue(request,response){
    let data = godownUtils.getByValue(request.body);
    response.send(responseBuilder.list(data));
}
function pushGodown(request,response){
    let data = request.body;
    data['id']=godownData.length+1;
    data['name']=request.body.name.charAt(0).toUpperCase()+request.body.name.substring(1);
    godownData.push(data);
    let path = 'src/docs/godowns.json';
   response.send(responseBuilder.push(godownData,path,data))
}

module.exports={
listGodown,
listByValue,
pushGodown
}