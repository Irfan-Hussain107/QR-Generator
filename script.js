let qrimg=document.getElementById("qrimg");
let image=document.getElementById("image");
let text=document.getElementById("text");


function generateqr(){
    if(text.value.length>0){
qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
image.classList.add("show-img");}
}