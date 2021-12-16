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

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*']

//window.prompt("How long would you like your password to be?")
//var length = (Number(prompt("Choose password length between 8 - 128 characters."));


if (confirm('Would you like to include lowercase letters?')) {
}
function random_lowerCase(lowerCase) {
  return lowerCase[Math.floor(Math.random()*lowerCase.length)];
}
  console.log(random_lowerCase(lowerCase));
   
//  else {
//    break;


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