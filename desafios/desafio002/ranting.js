function submit(){
    let main = document.getElementById("box-main");
    let your = document.getElementById("thank")

    if(your.classList.contains("hiden")){
        your.classList.remove("hiden")
        main.classList.add("hiden")
    }
    
}

function verifica(number){
    let text = document.getElementById("ranting-js")
    text.innerHTML = number
}
