var jogo = document.querySelector("ul");
var xo = 1;

jogo.addEventListener("click", function(event){
    event.preventDefault();
    var xx = event.target;
    var clique = xx.textContent;
    
    //click fora
    if(clique.length > 2){
        return
    }

    xo++;

    if((xo % 2) == 0 ){
        xx.textContent = "X";
        xx.style.color = "#36C8F5";
    }else if((xo % 2) == 1){
        xx.textContent = "O";
        xx.style.color = "#A2F53D";
    }
    if(xo >= 4){
        validacao()
    }
           
})