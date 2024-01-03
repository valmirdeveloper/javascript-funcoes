function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(10));



// Parâmetros e argumentos: //


// peso e altura são Parâmetros//
function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.8));

imc(80, 1.80) // 80 e 1.80 são argumentos
imc(60, 1.70) // 60 e 1.70 são argumentos

//SEPARAR PO VÍRGULA CADA PARÂMETRO. VOCÊ PODE DEFINIR MAIS DE UM PARÂMETRO OU NENHUM TAMBÉM.



function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    } else if (cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores';
    }
}



// FUNÇÕES ANÔNIMAS:
// CHAMADAS DE CALLBACK, GERALMENTE SÃO FUNÇÕES QUE OCORREM APÓS ALGUM EVENTO.//

addEventListener('click', function(){ console.log('oi') })
    

// FUNÇÕS ANÔNIMAS SÃO AQUELAS EM QUE O NOME DA FUNÇÃO NÃO É DEFINIDO, ESCRITOS COMO FUNCTION()  OU () => {}


