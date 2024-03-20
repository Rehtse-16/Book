let butIN = document.getElementById("butIN");
let but = document.getElementById("but");
let nameField= document.getElementById("nameField");
let nameFold= document.getElementById("nameFold");
let pass= document.getElementById("pass");
let title= document.getElementById("title");
butIN.onclick = function(){
    nameField.style.maxHeight = '0';
    nameFold.style.maxHeight= '0'
    pass.style.maxHeight= '0'
    title.innerHTML = 'Sign In';
    ut.classList.add("disable")
    butIN.classList.remove("disable")
}
but.onclick = function(){
    nameField.style.maxHeight = '60px';
    nameFold.style.maxHeight= '60px'
    pass.style.maxHeight= '60px'          
    title.innerHTML = 'Register';
    but.classList.remove("disable")
    butIN.classList.add("disable")
 }