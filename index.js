const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = [ "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let isLetters = true;
let isNumbers = true;
let isSymbols = true;
let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")
let lettersEl = document.getElementById("letters-btn")
let numbersEl = document.getElementById("numbers-btn")
let symbolsEl = document.getElementById("symbols-btn")

function generate() {
    let length = document.getElementById('numberInput').value;
    
    cleanGenerator()
    
    if(!length){
        alert("First, insert the length.");
    } else if (length < 21 && length > 9){
        getRandomCharacters(length)
    } else {
        alert("The length MUST be between 10 and 20 characters")
    }
}


function getRandomCharacters(length) {    
    let storage = getStorage()
    let storageLength = storage.length
    
    if(!storageLength){
        alert("Please include a type of Character to Include");
    } else{
        for (let i=0 ; i < length ; i++){
            let rand1 = Math.floor(Math.random()*storageLength) 
            let rand2 = Math.floor(Math.random()*storageLength) 
            
            passEl1.innerText += storage[rand1]
            passEl2.innerText += storage[rand2]  
    }
    }
}
    
function cleanGenerator() {
    passEl1.innerText = ""
    passEl2.innerText = ""
}

function changeLetters() {
    if (isLetters){
        isLetters = false;
        lettersEl.style.border="none";
        lettersEl.style.color= "#FFFFFF";
    } else {
        isLetters = true;
        lettersEl.style.border="2px solid #55F991";
        lettersEl.style.color= "#55F991";
    }
}

function changeNumbers() {
    if (isNumbers){
        isNumbers = false;
        numbersEl.style.border="none";
        numbersEl.style.color= "#FFFFFF";
    } else {
        isNumbers = true;
        numbersEl.style.border="2px solid #55F991";
        numbersEl.style.color= "#55F991";
    }
}

function changeSymbols() {
    if (isSymbols){
        isSymbols = false;
        symbolsEl.style.border="none";
        symbolsEl.style.color= "#FFFFFF";
    } else {
        isSymbols = true;
        symbolsEl.style.border="2px solid #55F991";
        symbolsEl.style.color= "#55F991";
    }
}

function getStorage(){
    let lett = []
    let numb = []
    let symb = []
    
    if (isLetters){
        lett = letters
    } 
    if (isNumbers){
        numb = numbers
    } 
    if (isSymbols){
        symb = symbols
    } 
    
    let storage = lett.concat(numb, symb)
    
    return storage
}

function copyText(buttonElement) {
    
    const buttonId = buttonElement.id;
    const text = document.getElementById(buttonId).innerText;

    // Create a temporary textarea element to copy the text
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);

    // Select and copy the text
    textArea.select();
    document.execCommand("copy");

    // Remove the temporary textarea element
    document.body.removeChild(textArea);

    alert("Text copied to clipboard!");
}


