function validacao(){
    var valores = document.querySelectorAll("#font");
    var ganhou = document.querySelector("span")

    var valor = []
    for (let i = 0; i < valores.length; i++) {
        valor[i] = valores[i].textContent; 
    }

    
    ganhadorO(valor)
    ganhadorX(valor)


    function ganhadorO(valor){

        /* Horizontal */ 
        if((valor[0] == "O") && (valor[1] == "O") && (valor[2] == "O")){
            ganhou.classList.add("ganhou")
            ganhou.style.background = "#A2F53D"
        }else if((valor[3] == "O") && (valor[4] == "O") && (valor[5] == "O")){
            ganhou.classList.add("ganhou")
            ganhou.style.top = "625px"
            ganhou.style.background = "#A2F53D"
        }else if((valor[6] == "O") && (valor[7] == "O") && (valor[8] == "O")){
            ganhou.classList.add("ganhou")
            ganhou.style.top = "850px"
            ganhou.style.background = "#A2F53D"
        }

        /* vertical */ 
        if((valor[0] == "O") && (valor[3] == "O") && (valor[6] == "O")){
            ganhou.classList.add("ganhouVertical")
            ganhou.style.background = "#A2F53D"
            
        }else if((valor[1] == "O") && (valor[4] == "O") && (valor[7] == "O")){
            ganhou.classList.add("ganhouVertical")
            ganhou.style.left = "calc(50% - 49px/2 - 0px)"
            ganhou.style.background = "#A2F53D"
        }else if((valor[2] == "O") && (valor[5] == "O") && (valor[8] == "O")){
            ganhou.classList.add("ganhouVertical")
            ganhou.style.left = "calc(50% - 49px/2 + 275px)"
            ganhou.style.background = "#A2F53D"
        }

        /* Transversal e Diagonal*/
        if((valor[2] == "O") && (valor[4] == "O") && (valor[6] == "O")){
            ganhou.classList.add("ganhouTrasversal")
            ganhou.style.transform = "rotate(48deg)"
            ganhou.style.background = "#A2F53D"
        }else if((valor[0] == "O") && (valor[4] == "O") && (valor[8] == "O")){
            ganhou.classList.add("ganhouTrasversal")
            ganhou.style.background = "#A2F53D"
        }
    }



    function ganhadorX(valor){

        /* Horizontal */ 
        if((valor[0] == "X") && (valor[1] == "X") && (valor[2] == "X")){
            ganhou.classList.add("ganhou")
            ganhou.style.background = "#36C8F5"
        }else if((valor[3] == "X") && (valor[4] == "X") && (valor[5] == "X")){
            ganhou.classList.add("ganhou")
            ganhou.style.top = "625px"
            ganhou.style.background = "#36C8F5"
        }else if((valor[6] == "X") && (valor[7] == "X") && (valor[8] == "X")){
            ganhou.classList.add("ganhou")
            ganhou.style.top = "850px"
            ganhou.style.background = "#36C8F5"
        }
        
        /* vertical */ 
        if((valor[0] == "X") && (valor[3] == "X") && (valor[6] == "X")){
            ganhou.classList.add("ganhouVertical")
            ganhou.style.background = "#36C8F5"
            
        }else if((valor[1] == "X") && (valor[4] == "X") && (valor[7] == "X")){
            ganhou.classList.add("ganhouVertical")
            ganhou.style.left = "calc(50% - 49px/2 - 0px)"
            ganhou.style.background = "#36C8F5"
        }else if((valor[2] == "X") && (valor[5] == "X") && (valor[8] == "X")){
            ganhou.classList.add("ganhouVertical")
            ganhou.style.left = "calc(50% - 49px/2 + 275px)"
            ganhou.style.background = "#36C8F5"
        }

        /* Transversal e Diagonal */ 
        if((valor[2] == "X") && (valor[4] == "X") && (valor[6] == "X")){
            ganhou.classList.add("ganhouTrasversal")
            ganhou.style.transform = "rotate(48deg)"
            ganhou.style.background = "#36C8F5"
        }else if((valor[0] == "X") && (valor[4] == "X") && (valor[8] == "X")){
            ganhou.classList.add("ganhouTrasversal")
            ganhou.style.background = "#36C8F5"
        }
    }

}