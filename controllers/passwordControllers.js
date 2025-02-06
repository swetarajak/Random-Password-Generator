// function renderHomePage(req,res){
//     res.render('index',{ password: null});
// }

import crypto from 'crypto';

function generatePassword(length = 12, includeUppercase = true, includeLowercase = true, includeNumbers = true, includeSymbols = true){
    const charset = [];

    if (includeUppercase) charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (includeLowercase) charset.push('abcdefghijklmnopqrstuvwxyz');
    if (includeNumbers) charset.push('0123456789');
    if (includeSymbols) charset.push('!@#$%*()_+=`~[]\{}|;\':",./<>?');

    if (charset.length === 0){
        throw new Error("At least one character set must be included");
    }

    const combinedCharset = charset.join('');
    const charsetLength = combinedCharset.length;

    let password = '';

    for(let i = 0; i < length; i++){
        const randomValue = crypto.randomInt(0, charsetLength);
        password += combinedCharset.charAt(randomValue);
    }

    return password;
}

export {generatePassword};