//====================================================================================================//
//========================================[ Global Elements ]=========================================//
//====================================================================================================//
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

//Input Number
let passwordLength;

//Input Bools
let allowSpecials;
let allowNumeric;
let allowLower;
let allowUpper;

//Const
const symbolSet = "!@#$%^&*()-_+=[]{}|:;<>?".split("");
const numberSet = "0123456789".split("");
const alphabetSetLower = "abcdefghijklmnopqrstuvwxyz".split("");
const alphabetSetUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

//====================================================================================================//
//===========================================[ Functions ]============================================//
//====================================================================================================//

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//============== Generate Password ==============//
// returns a string with a generated password
//===============================================//
function generatePassword() {
  // // TODO: Handle User Inputs
  //Function User Inputs => True = Continue, False = Breakout
  passwordLength = prompt(
    `How many characters would you like the password to be?
    between (8-128)`
  );
  // // TODO: Check if this is a Valid Input
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("You must select a number between 8 and 128");
    return "";
  }

  // // TODO: Handle Building the Array of possible options
  var possibleOptions = BuildArrayOfOptions();
  if (possibleOptions == 0) {
    alert("You must select a set of characters to continue");
    return "";
  }

  var password = "";
  // // TODO: Loop through the Length and push items to Array
  //Each Loop Get Random String from Abalible Options
  for (let i = 0; i < passwordLength; i++) {
    let randomint = Math.floor(Math.random() * possibleOptions.length);
    password += possibleOptions[randomint];
  }

  return password; //Return a string for password
}

//=========== Build Arrays ===========//
// returns all arrays based on Inputs
//====================================//
function BuildArrayOfOptions() {
  var finalArray = [];
  // // TODO check all Bools and build the array based on what bools are selected
  if (confirm("Would you like lower case letters?")) {
    finalArray = finalArray.concat(alphabetSetLower);
  }
  if (confirm("Would you like upper case letters?")) {
    finalArray = finalArray.concat(alphabetSetUpper);
  }
  if (confirm("Would you like to use numbers?")) {
    finalArray = finalArray.concat(numberSet);
  }
  if (confirm("Would you like special characters?")) {
    finalArray = finalArray.concat(symbolSet);
  }
  return finalArray;
}

//====================================================================================================//
//===========================================[ Events ]===============================================//
//====================================================================================================//

//How we start logic from this script
generateBtn.addEventListener("click", writePassword);
