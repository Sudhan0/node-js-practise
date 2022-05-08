const constant = require('./constant');

function message(message){
    console.log(message);
}
function validationError(message){
    let error = {
        "code":400,
        "message":message
    }
    return error
}

module.exports={
    message,
    validationError
}