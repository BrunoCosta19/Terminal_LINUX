/* 
========================
	SCRIPT TERMINAL
========================
*/

document.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

        /* VARIÁVEIS */
        const entrada = document.getElementById("entrada").value;
        clearent = document.getElementById('entrada').value='';

        var result = document.getElementById("result");
        var diretorioVal = document.getElementById("diretorio").value;
        var diretorio = document.getElementById("diretorio");
        var entradaProcessada = entrada.split(" ");

        var testeComand = entradaProcessada[0];

        /*  */
        if (entrada === "clear") {
            result.innerHTML = "";

        } else if (testeComand === "mkdir") {
            result.innerText = "";
            var NewDir = entradaProcessada[1];
            alert(`Diretório criado com o nome "${NewDir}"`);
           
        } else if (testeComand === "rmdir") {
            result.innerText = "";
            var NewDir = entradaProcessada[1];
            alert(`Diretório com o nome "${NewDir}" removido com sucesso `);
           
        } else if (entrada === "ls") {
            if (diretorioVal = "~") {
                result.innerText = `Desktop   Documentos   Downloads   Music   Pictures   Public   snap   Templates   Videos`;
                result.style.color = "#0068bd";
            }

        } else if (entrada === "cat > File") {
            //input informação
            
        } else if (testeComand === "echo") {
            var txtComand = entrada.replace("echo", "");
            result.innerText = `${txtComand}`;
            console.log(txtComand);

        } else if (entrada === "cd ~") {
            diretorio.innerText = "~";

        } else if (entrada === "cd /") {
            diretorio.innerText = "/";

        } else if (testeComand === "cd") {
            var NewDir = entradaProcessada[1];
            diretorio.innerText = `~/${NewDir}`;

        } else {
            result.innerHTML = "Este comando não existe, cheque a biblioteca para encontrar o comando correto..." + "<br>" + "[This command doesn't exist, check the library for search the correct command...]";

        }


        btn.click();
        
    }
    
});

/* 
========================
  SCRIPT DIV ESPANSIVA
========================
*/

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
}


/* 
========================
        RELÓGIO
========================
*/

var myVar = setInterval(myTimer ,1000);
    function myTimer() {
        var d = new Date(), displayDate;
       if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
          displayDate = d.toLocaleTimeString('pt-BR');
       } else {
          displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
       }
          document.getElementById("relogio").innerHTML = displayDate;
    }


/* 
========================
    DIRECIONADORES
========================
*/

function inicio() {
    window.location.assign("index.html")
}
function open_terminal() {
    window.location.assign("terminal.html")
}
function minimize() {
    alert('Impossível minímizar neste momento');
}
function maximize() {
    alert('Impossível maximizar neste momento');
}