// //estrutura callback
// //parte1: function nomeVariavel(parametro1, parametro2) {
//     //return parametro1 + " " + parametro2;
// //}
// //parte2: function nomeVariavel2(parametro1, parametro2, callback) {
//     //return callback(nome, sobrenome);
// //}
// //console.log(nomeVariavel2("parametro", nomeVariavel));

function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}
function saudar(nome, sobrenome, callback) {
     return "Ola" + " " + callback(nome, sobrenome) + "!";
}
console.log(saudar("Lula", "Silva", nomeCompleto));

//outra estrutura callback - arrow function
//let nomeVariavel = (a, b, callback)=> callback (a + b);

let calculadora = (numA, numB, operacao)=> operacao(numA + numB);


//estrutura convencional
function somar(numeroA, numeroB) {
    return numeroA + numeroB;
}
function calculadora1(numeroA, numeroB, callback) {
    return callback(numeroA, numeroB);
}
console.log(calculadora1(10, 80, somar));

//outra extrutura callback - posicao da letra
function iniciais(nome, sobrenome) {
    return nome[0] + " " + sobrenome[0]
}
function saudar(nome, sobrenome, callback) {
    return "Ola" + " " + callback(nome, sobrenome) + "!";
}
console.log(saudar("Gustavo", "Lima", iniciais));


//outro exemplo
function dobro(numeroA) {
    return numeroA * 2;
}
function triplo(numeroB) {
    return numeroB * 3;
}
function aplicar(numeroC, callback) {
    return callback(numeroC);
}
console.log(aplicar(10, dobro));

//outro exemplo
function somar(numA, numB) {
    return numA + numB;
}
function subtrair(numA, numB) {
    return numA - numB;
}
function multiplicar(numA, numB) {
    return numA * numB;
}
function dividir(numA, numB) {
    return numA / numB;
}
function calculadora(numA, numB, callback) {
    return callback(numA, numB);
}
console.log(calculadora(10, 2, subtrair));

//outro exemplo
function adicionarHttp(url) {
    return "Http://" + url + ".com.br";
}
function processar(site, adicionarHttp) {
    return adicionarHttp(site);
}
console.log(processar("uol", adicionarHttp));
