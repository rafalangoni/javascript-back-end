function imprimeTexto(texto){
    console.log(texto);
}

function soma(){
    const resultado = 2 + 2;
    return resultado;
}

imprimeTexto("Hello World!")
imprimeTexto(soma());

// PARÂMETROS
function cumprimentar(){
    return 'Oi, pessoal!'
}

function saudacao(nome){
    console.log(`${cumprimentar()} Meu nome é ${nome}.`)
}

saudacao("Rafael");

//HOISTING - se chamar antes de criar não vai funcionar por ser const
const somaHoisting = function(num1, num2){
    return num1 + num2
}

console.log(somaHoisting(1,2))

//ARROW FUNCTION
const somaArrow = (num1, num2) => num1 + num2;

console.log(somaArrow(2,3))