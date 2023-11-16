var generateBtn = document.getElementById("generate");

function writePassword() {
 var password = generatePassword();
 var passwordText = document.getElementById("password");
 passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
 var length = parseInt(prompt("Please enter amount of characters you need (between 8 and 128 characters):"));
 var includeLowercase = confirm("Press OK to include lowercase characters?");
 var includeUppercase = confirm("Press OK to include uppercase characters?");
 var includeNumeric = confirm("Press OK to include numeric characters?");
 var includeSpecial = confirm("Press OK to include special characters?");
 var password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

 return password;
}

function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
 var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
 var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numericChars = "0123456789";
 var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

 var allChars = "";
 var password = "";

 if (includeLowercase) allChars += lowercaseChars;
 if (includeUppercase) allChars += uppercaseChars;
 if (includeNumeric) allChars += numericChars;
 if (includeSpecial) allChars += specialChars;

 for (var i = 0; i < length; i++) {
   var randomIndex = Math.floor(Math.random() * allChars.length);
   password += allChars.charAt(randomIndex);
 }

 return password;
}



