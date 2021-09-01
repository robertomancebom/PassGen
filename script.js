// DOM elements
const gen_btn = document.getElementById("gen-btn");
const cp_btn = document.getElementById("cp-btn");

const options = document.getElementsByClassName("option");
const pass_length = document.getElementById("length");
const upper_check = document.getElementById("upper");
const number_check = document.getElementById("number");
const symbol_check = document.getElementById("symbol");

const result = document.getElementById("result");


//values
const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = `!"#$%&'()*+,-./\\:;<=>?@[]^_\`{|}~`;

var alphabet = '';
var password = '';

function generatePassword() {
    
    password=''; //clear password

    alphabet = letters;
    
    if(number_check.checked){
        alphabet += numbers;
    }
    if(symbol_check.checked){
        alphabet += symbols;
    }
    
    for(var x=0; x < pass_length.value; x++) {
        password += generateRandomCharacter();
    }
    result.innerHTML = password;
}

function generateRandomCharacter () {
    var rand_char = alphabet.charAt(Math.random()*alphabet.length);
    if(rand_char >= 'a' && rand_char <= 'z' ){
        if(upper.checked && Math.random() > 0.5){
            rand_char = rand_char.toUpperCase();
        }
    }
    return rand_char;
}

function copyPassword() {
    if(password == ''){
        alert("You need to generate a password first!");
    } else {
        navigator.clipboard.writeText(password);
    }
}

generatePassword();

gen_btn.addEventListener("click",generatePassword);
cp_btn.addEventListener("click", copyPassword);
Array.prototype.forEach.call(options, (element) => {
    element.addEventListener("change",generatePassword);
});
