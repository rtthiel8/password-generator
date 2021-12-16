// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var includeLowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var includeUppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var includeNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var includeSymbols = ['!', '@', '#', '$', '%', '^', '&', '*']
var possibleCharacters = []

//window.prompt("How long would you like your password to be?")
//var length = (Number(prompt("Choose password length between 8 - 128 characters."));


var includeLowercaseLetters = false;
if (confirm('Would you like to include lowercase letters?')) {
  includeLowercaseLetters = true;
}
if (true) {
  var possibleCharacters = [includeLowercaseLetters]
}

if (includeLowercaseLetters) {
  // push all the uppercase letters into possibleCharacters
}

var includeUppercaseLetters = false;
if (confirm('Would you like to include uppercase letters?')) {
  includeUppercaseLetters = true;
}

var possibleCharacters = [];

if (includeUppercaseLetters) {
  // push all the uppercase letters into possibleCharacters
}

var includeNumbers = false;
if (confirm('Would you like to include uppercase letters?')) {
  includeNumbers = true;
}

var possibleCharacters = [];

if (includeNumbers) {
  // push all the uppercase letters into possibleCharacters
}

var includeSymbols = false;
if (confirm('Would you like to include uppercase letters?')) {
  includeSymbols = true;
}

var possibleCharacters = [];

if (includeSymbols) {
  // push all the uppercase letters into possibleCharacters
}





if (confirm('Would you like to include lowercase letters?')) {
}
function random_lowerCase(lowerCase) {
  return lowerCase[Math.floor(Math.random()*lowerCase.length)];
}
  console.log(random_lowerCase(lowerCase));


if (confirm('Would you like to include uppercase letters?')) {
}
function random_upperCase(upperCase) {
    return upperCase[Math.floor(Math.random()*upperCase.length)];
    }
    console.log(random_upperCase(upperCase));

if (confirm('Would you like to include numbers?')) {
}
function random_numbers(numbers) {
  return numbers[Math.floor(Math.random()*numbers.length)];
  }
  console.log(random_numbers(numbers));

if (confirm('Would you like to include symbols?')) {
}
function random_symbols(symbols) {
  return symbols[Math.floor(Math.random()*symbols.length)];
  }
  console.log(random_symbols(symbols));


//while password.length 

  
// while password is < desired length keep adding random characters from chosen types
// const lowerCase = Math.floor(Math.random() * lowerCase.length);
// console.log(random, lowerCase[random]);