
document
    .addEventListener("DOMContentLoaded",() => {
        document.getElementById("calcula")
            .addEventListener("click",() => {
                let A = siteFabric("A");
                let B = siteFabric("B");
                window.alert(criaMensagem(A,B));
        });
})

siteFabric = (nome) => {
    let div = document.getElementById(nome);
    let visitantes = div.querySelector('[name="visitantes"]').value;
    let conversoes = div.querySelector('[name="conversoes"]').value;
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