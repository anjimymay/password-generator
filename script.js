// Assignment Code
var generateBtn = document.querySelector("#generate");
var resultEl = document.getElementById('password');
var pwLength;
var pwUppers;
var pwNumber;
var pwSymbols;
var pwLowers;

var ranArr = [];

// Write password to the #password input
function writePassword() {

  generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = ranArr.join('');
}
//Prompts user for input
function getPrompt() {
  pwLength = prompt("How long do you want the length of or password? (Min: 8. Max: 120.)");
  pwUppers = confirm("Do you want uppercase letters?");
  pwLowers = confirm("Do you want lowers? y or n");
  pwNumber = confirm("Do you want Numbers? y or n");
  pwSymbols = confirm("Do you want Symbols? y or n");
  
}
function generatePassword() {
  getPrompt();
  var typeArr = [];
  //Type check that pushes functions into an arr
  console.log("Inside generate password." +  +pwUppers);
  for(var j = 0; j < pwLength; j++) {
  if (pwUppers) {
    typeArr.push(getRandomUpper());
    console.log(typeArr);
  } 
  if (pwLowers) {
    typeArr.push(getRandomLower());
  } 
  if (pwSymbols) {
    typeArr.push(getRandomSymbol());
  }
  if (pwNumber) {
    typeArr.push(getRandomNumber());
  }
}
  
  console.log(typeArr);

  //Loop that pushes randomly generated char to ranArr
  for(var i = 0; i < pwLength; i++){
    ranArr.push(typeArr[Math.floor(Math.random() * typeArr.length)]);
    console.log(ranArr);
  }
}

//Generator functions for each output type
function getRandomLower() {
  return String.fromCharCode(Math.floor((Math.random()* 26) + 97));
};

function getRandomUpper() {
  return String.fromCharCode(Math.floor((Math.random()* 26) + 65));
}


function getRandomNumber() {
  return String.fromCharCode(Math.floor((Math.random()* 10) + 48));
}


function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.`~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


//console.log(getRandomSymbol());
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
