
var aes256 = require('aes256');

var key = 'my passphrase';
 
function decrypt(encryptedPlainText){
    console.log('decrypt')
    var decryptedPlainText = aes256.decrypt(key, encryptedPlainText);
    return decryptedPlainText;
}

function encrypt(plaintext){
    var encryptedPlainText = aes256.encrypt(key, plaintext);
    return encryptedPlainText;
}

module.exports={
    decrypt,
    encrypt
}