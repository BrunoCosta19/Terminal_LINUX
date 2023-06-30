document.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
        console.log("apertou o enter");
        const btn = document.getElementById("entrada").value;

        var list = document.getElementById("list");

        if (btn === "teste") {
            list.innerHTML = "é um comando do console" + "<br>" + "comando: " + btn;
        } else if (btn === "mkdir") {
            list.innerText = "é um comando do console";
        } else {
            list.innerText = "não é um comando do console";
        }

        btn.click();
        
    }
    
});




function coleta() {
    var coleta = document.getElementById("coleita").value;

    var txxt = document.getElementById("resultado");

    if (coleta === "teste") {
        txxt.innerText = "é um comando do console";
    } else if (coleta === "mkdir") {
        txxt.innerText = "é um comando do console";
    } else {
        txxt.innerText = "não é um comando do console";
    }
}




function gravar(){
    var titulo = document.getElementById("txtTitulo").value;
    var subtitulo = document.getElementById("txtSubtitulo").value;
    var div = document.getElementById("divResultado");
     
    div.innerText = "<h1>" + titulo +"</h1>"+ "\n" + subtitulo;
}