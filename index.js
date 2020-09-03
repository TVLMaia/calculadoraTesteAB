function pegaECalcula() {
    var va = document.getElementById("myVA").value;
    var ca = document.getElementById("myCA").value;
    var vb = document.getElementById("myVB").value;
    var cb = document.getElementById("myCB").value;
    
    var resultadoA = ca/va*100
    var resultadoB = cb/vb*100
    

    if (resultadoA > resultadoB) {
        var difAWin = resultadoA-resultadoB
        alert("A página A teve mais conversões! Você converteu: "+parseInt(resultadoA)+"% de todos os seus visitantes. Resultando em: "+parseInt(difAWin)+"% de diferença em relação a pagina B, que converteu somente: "+parseInt(resultadoB)+"%")
    } else if (resultadoB > resultadoA) {
        var difBWin = resultadoB-resultadoA
        alert("A página B teve mais conversões! Você converteu: "+parseInt(resultadoB)+"% de todos os seus visitantes. Resultando em: "+parseInt(difBWin)+"% de diferença em relação a pagina A, que converteu somente: "+parseInt(resultadoA)+"%")
    } else {
        return alert("Os resultados foram iguais, ambas as paginas converteram: "+parseInt(resultadoB)+"%")
    }
//document.getElementById("result").innerHTML("teste")

};
