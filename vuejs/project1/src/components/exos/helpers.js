function random(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function replaceAt(index, str, replacement) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

function isPasswordStrong(pass) {
    if (pass.length <= 10) return false;

    var oneUpperChar = false;
    var oneNumber = false;
    var oneSpecialChar = false;

    for (var i=0; i<pass.length; i++) {
        var ascii = pass[i].charCodeAt(0);

        // number ?
        if (pass[i] >= 0 && pass[i] <= 9) {
            oneNumber = true;
            //console.log('oneNumber => ', oneNumber, pass[i]);
        }

        // upper character ?
        if (ascii >= 65 && ascii <= 90) {
            oneUpperChar = true;
            //console.log('oneUpperChar => ', oneUpperChar, ascii, pass[i]);
        }

        // special char ?
        if (ascii >= 33 && ascii <= 47) {
            oneSpecialChar = true;
            //console.log('oneSpecialChar => ', oneSpecialChar, ascii, pass[i]);
        } 
    }

    return oneNumber && oneUpperChar && oneSpecialChar;
}

export { random, replaceAt, isPasswordStrong }