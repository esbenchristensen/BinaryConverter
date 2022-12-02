var binaryConverted1 = 0
var binaryConverted2 = 0
var binaryConverted3 = 0
var binaryConverted4 = 0

/* IPv4 to Binary */

function ipToBinary() {
var binary1 = document.getElementById("firstOctalBinary").value;
var octal1 = parseInt(binary1, 2).toString(10);


var binary2 = document.getElementById("secondOctalBinary").value;
var octal2 = parseInt(binary2, 2).toString(10);


var binary3 = document.getElementById("thirdOctalBinary").value;
var octal3 = parseInt(binary3, 2).toString(10);


var binary4 = document.getElementById("fourthOctalBinary").value;
var octal4 = parseInt(binary4, 2).toString(10);



const resultBinary = octal1 + "." + octal2 + "." + octal3 + "." + octal4;

document.getElementById("resultBinary").innerHTML = resultBinary;
}

/* Binary to IPv4 */

function binaryToIp() {

var ipOctal1 = document.getElementById("firstOctalIp").value;
binaryConverted1 = parseInt(ipOctal1).toString(2);


var ipOctal2 = document.getElementById("secondOctalIp").value;
binaryConverted2 = parseInt(ipOctal2).toString(2);


var ipOctal3 = document.getElementById("thirdOctalIp").value;
binaryConverted3 = ("00000000" + parseInt(ipOctal3).toString(2)).slice(-8);


var ipOctal4 = document.getElementById("fourthOctalIp").value;
binaryConverted4 = ("00000000" + parseInt(ipOctal4).toString(2)).slice(-8);


const resultIp = binaryConverted1 + " . " + binaryConverted2 + " . " + binaryConverted3 + " . " + binaryConverted4;

document.getElementById("resultConvertedBinary").innerHTML = resultIp;
}


/* Indsæt fra binary converter til IPv4 converter */

function insertFromBinary() {
    let testingIt = document.getElementById("firstOctalBinary");
    testingIt.value = binaryConverted1;
    let testingIt2 = document.getElementById("secondOctalBinary");
    testingIt2.value = binaryConverted2;
    let testingIt3 = document.getElementById("thirdOctalBinary");
    testingIt3.value = binaryConverted3;
    let testingIt4 = document.getElementById("fourthOctalBinary");
    testingIt4.value = binaryConverted4;
}
