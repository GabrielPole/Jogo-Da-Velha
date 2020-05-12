var button = document.querySelectorAll("button");
var jogo = document.querySelector("ul");

jogo.addEventListener("click", function(event){
    event.preventDefault();
    var xx = event.target;

    console.log(xx.textContent)

    if(xx.textContent.length > 1){
        return
    }

    xx.textContent = "X";
    xx.style.color = "#098ca3";
    
})

jogo.addEventListener("contextmenu", function(event){
    event.preventDefault();
    var oo = event.target;

    if(oo.textContent.length > 1){
        return
    }

    oo.textContent = "O";
    oo.style.color = "#1cb87c"
    
})



    /*var casa = casa;
    casa = button[2].textContent;
            098ca3
    console.log(casa)
    fun*/