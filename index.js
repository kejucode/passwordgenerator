let passwordLength = document.getElementById ("passwordLength")
let password = document.getElementById ("password")
let saveButton = document.getElementById ("saveButton")

function generatePassword (len) {
const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numeric = "0123456789"
const symbol = "@*"
const data = lowerAlphabet + uppercaseAlphabet + numeric + symbol
let generator = "";
for (let index = 0; index < len; index++) {
generator += data[~~(Math.random() * data.length)];
}

return generator
}

function getPassword () {
    let newPassword = generatePassword (passwordLength.value)
    password.value = newPassword
}

function savePassword () {
    document.title = password.value
    saveButton.setAttribute("href" , "data:text/plain;charset=utf-8," + encodeURIComponent("Password saya : ") + document.title)
    saveButton.setAttribute("download", "PasswordGenerator.txt")
}