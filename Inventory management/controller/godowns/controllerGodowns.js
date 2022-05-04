const godownData = require('../../src/docs/godowns.json');
const express = require('express');
const responseBuilder = require('../../src/helper/responseBuilder');
function listGodown(request,response){
    console.log('Listing godowns');
    response.send(responseBuilder.list(godownData));
}

module.exports={
listGodown
}