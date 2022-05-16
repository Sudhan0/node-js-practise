const express = require('express');
const responseBuilder = require('../../src/helper/responseBuilder');
const shopsData = require('../../src/docs/shops.json');
const { path } = require('express/lib/application');
const shopUtils = require('../../utils/shopUtils');

function listShops(request,response){
    response.send(responseBuilder.list(shopsData));
}
function pushShop(request,response){
    let body =  request.body;
    body['id'] =  shopsData.length+1;
    body['name'] = body.name.charAt(0).toUpperCase()+body.name.substring(1);
    body['location'] = body.location.charAt(0).toUpperCase()+body.location.substring(1);
    shopsData.push(body);
    let path = 'src/docs/shops.json';
    response.send(responseBuilder.push(shopsData,path,data));
}

function listByValue(request,response){
    let data = shopUtils.getByValue(request.body);
    response.send(responseBuilder.list(data))

}

module.exports={
    listShops,
    pushShop,
    listByValue
}