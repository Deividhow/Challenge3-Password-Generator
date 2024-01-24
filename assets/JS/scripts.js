// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//added meaning to the variables
var lowercase="abcdefghijklmnopqrstuvwyz";
var uppercase=lowercase.toUpperCase();
var numbers="0123456789";
var special="~!@#$%^&*";

// adds a promt on screen to choose the number of characters to be used in the password thats going to be generated.
function generatePassword(){
var passwordSize=prompt("Enter password length between 8 and 128")
console.log(passwordSize)

// added an alert if the choosen number isnt between 8 and 128.
if(passwordSize>=8 && passwordSize <=128){
  //added a confirm to check if the person using the password generator wants lowercase, uppercase,numeric and special characters to be included in the password
var ConfirmLowerCase=confirm("Do you want lower case included in the password?")
console.log(ConfirmLowerCase)
ConfirmUpperrCase=confirm("Do you want uppper case included in the password?")
Confirmnumbers=confirm("Do you want numbers included in the password?")
Confirmspecial=confirm("Do you want special characters included in the password?")
}
else{
  alert("Invalid Entry,Password length must be between 8 and 128")
}




}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);