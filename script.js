//====================================================================================================//
//========================================[ Global Elements ]=========================================//
//====================================================================================================//

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

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

//===== Generate Password =====//
// returns a string with a generated password
//============================//
function generatePassword() {
  //Function User Inputs => True = Continue, False = Breakout
  //Function Build Array of Avalible Options

  //Check if finalArray !Empty True = Continue, False = Breakout

  var password;
  //For Loops based on Length
  //Each Loop Get Random String from Abalible Options
  //Amend to password

  //Evaluate Password for at least one of each input
  return password;
}

//===== Get User Inputs =====//
// Sends Prompts to the User requiring verification
//============================//
function getUserInputs() {
  //Send for passwordlength
  //Evaluate Length => Return false

  //Send for allowSpecials
  //Send for allowNumeric
  //Send for allowLower
  //Send for allowUpper
  //Evaluate allowBools => Return false

  return true;
}

//===== Build Arrays =====//
// returns all arrays based on Inputs
//============================//
function buildArrayOfOptions() {
  var finalArray;
  //If allowSymbles
  //Amend symbleSet > finalArray

  //If allowNumbers
  //Amend numberSet > finalArray

  //If allowLowercase
  //Amend '' > finalArray

  //If allowUppercase
  //Amend '' > finalArray

  return finalArray;
}
