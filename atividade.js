/*Criar uma função que receba como parametro um array de numeros e retorne um array contendo somente numeros positivos.*/


const numeros = [-11, 2, -8, 3, 4, 90];
const nomes = ["eu", "ela", "eles"]

function retornaPositivos(numeros){
    return numeros.filter((numero) => numero >0); //retornando um novo array com os elementos que passaram no teste
}

function retornaMaiorNumero(numeros){
    const orderList = numeros.sort((a,b) => a > b ? a=[0] : a=[1])
    return orderList[orderList.length - 1]
}

function somaPositivos(numeros){
    let positivo = numeros.filter((numero) => numero >0);
    const total = positivo.reduce((total, currentElement) => total + currentElement)
    return total
}

function retornaMaiorNome(nomes){
    const orderList = nomes.sort((a,b) => a > b ? a=[0] : a=[1])
    return orderList[orderList.length - 1]
}

console.log('Retornando os positivos: ',retornaMaiorNome(nomes));

