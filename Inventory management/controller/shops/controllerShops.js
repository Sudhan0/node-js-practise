const express = require('express');
const responseBuilder = require('../../src/helper/responseBuilder');
const shopsData = require('../../src/docs/shops.json');

function listShops(request,response){
    console.log('Listing shops');
        response.send(responseBuilder.list(shopsData));
}

module.exports={
    listShops
}