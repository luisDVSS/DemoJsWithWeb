const btninnerhtml=document.getElementById("btnChangeInnerHtml");
let btninnerClicked=false



function handleBtnInnerhtml(){
    if (btninnerClicked){
    document.getElementById("innerhtml").innerHTML="Cambiado por INNER HTML"
    }else{
    document.getElementById("innerhtml").innerHTML="Entiende que es INNER HTML"

    }
btninnerClicked=!btninnerClicked
// console.log(btninnerClicked)
}
btninnerhtml.addEventListener("click", handleBtnInnerhtml);

const dcmwritebtn=document.getElementById("dcmwritebtn");


function handledcmwritebtn(){
document.writeln("IMPRESION CON DOCUMENT.WRITE")
}
addEventListener("click",dcmwritebtn)
