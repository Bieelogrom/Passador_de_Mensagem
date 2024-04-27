
let elemento = document.getElementById("Input_Mensagem");

    elemento.addEventListener("keydown", function(event){
        if(event.key == "Enter")
            passarMensagem();
    })

 
    function passarMensagem(){

        let valor = document.getElementById("Input_Mensagem").value;

        if(valor != null  || valor  != undefined){
            document.getElementById("Mensagem").innerHTML = valor
            document.getElementById("Input_Mensagem").value = ""
        }else{
            document.getElementById("Mensagem").innerHTML = "Nenhuma mensagem digitada!"
        }
    }