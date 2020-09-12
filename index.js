
document.addEventListener("DOMContentLoaded",() => {
    document.getElementById("calcula")
    .addEventListener("click",() => {
        var visitantesA = document.getElementById("myVA").value;
        var conversoesA = document.getElementById("myCA").value;
        var visitantesB = document.getElementById("myVB").value;
        var conversoesB = document.getElementById("myCB").value;

        let A = siteFabric("A", visitantesA, conversoesA);
        let B = siteFabric("B", visitantesB, conversoesB);

        window.alert(criaMensagem(A,B));

    }); 

    siteFabric = (nome, visitantes, conversoes) => {
        
        let resultado = Math.trunc((conversoes / visitantes) * 100);
        return {
            nome:nome,
            resultado: resultado
        }
    }


    criaMensagem = (siteA, siteB) =>{
        let mensagem = '';
        
        if(siteA.resultado === siteB.resultado){
            mensagem = `Os resultados foram iguais, ambas as paginas converteram: ${siteA.resultado}%` 
        }else{
            let maior = max([siteA, siteB])
            let menor = min([siteB, siteA])
            let diferenca = Math.abs(siteA.resultado - siteB.resultado);

            mensagem = `A página ${maior.nome}  teve mais conversões! Você converteu: 
            ${maior.resultado}% de todos os seus visitantes. Resultando em: 
            ${diferenca}% de diferença em relação a pagina ${menor.nome}, que converteu somente: 
            ${menor.resultado}%`;
        }
        return mensagem;
    }

    min = arr => arr.reduce( (p, v) =>  p.resultado < v.resultado ? p : v );
      
    max = arr => arr.reduce((p, v) => p.resultado > v.resultado ? p : v );

})
