
var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true
setInterval(() => {
    proximaImg()
}, 4000)
function proximaImg(){
    cont++
    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}


//var MenuItens = document.getElementById("menu");

//MenuItens.style.maxHeight = "0px";

//function cllr(){
//    if (MenuItens.style.maxHeight == "0px"){
//        MenuItens.style.maxHeight = "200px";
//    }else{
//        MenuItens.style.maxHeight = "0px";
//    }
//}