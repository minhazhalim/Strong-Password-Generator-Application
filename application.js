const password = document.getElementById('password');
const copy = document.getElementById('copy');
const length = document.getElementById('length');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generate = document.getElementById('generate');
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";
function getLowercase(){
     return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase(){
     return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber(){
     return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol(){
     return symbols[Math.floor(Math.random() * symbols.length)];
}
function generatePassword(){
     const lengthElement = length.value;
     let passwordElement = "";
     if(upper.checked){
          passwordElement += getUppercase();
     }
     if(lower.checked){
          passwordElement += getLowercase();
     }
     if(number.checked){
          passwordElement += getNumber();
     }
     if(symbol.checked){
          passwordElement += getSymbol();
     }
     for(let i = passwordElement.length;i < lengthElement;i++){
          const x = generateX();
          passwordElement += x;
     }
     password.innerText = passwordElement;
}
function generateX(){
     const xs = [];
     if(upper.checked){
          xs.push(getUppercase());
     }
     if(lower.checked){
          xs.push(getLowercase());
     }
     if(number.checked){
          xs.push(getNumber());
     }
     if(symbol.checked){
          xs.push(getSymbol());
     }
     if(xs.length === 0){
          return "";
     }
     return xs[Math.floor(Math.random() * xs.length)];
}
generate.addEventListener('click',generatePassword);
copy.addEventListener('click',() => {
     const textarea = document.createElement('textarea');
     const passwordElement = password.innerText;
     if(!passwordElement) return;
     textarea.value = passwordElement;
     document.body.appendChild(textarea);
     textarea.select();
     document.execCommand('copy');
     textarea.remove();
     alert('Password Copied to Clipboard');
});