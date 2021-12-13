const input = document.querySelector("input");
const button = document.querySelector("button");
const far = document.querySelector("span.far");
const fas = document.querySelector("span.fas");
const span = document.querySelectorAll('span');
let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
button.onclick = () => {
     let i;
     let randomPassword = "";
     far.style.input = "block";
     fas.style.input = "none";
     for(i = 0;i < 16;i++){
        randomPassword = randomPassword + characters.charAt(Math.floor(Math.random() * characters.length));
     }
     input.value = randomPassword;
}
function copy(){
    far.style.display = "none";
    fas.style.display = "block";
    input.select();
    document.execCommand("copy");
}