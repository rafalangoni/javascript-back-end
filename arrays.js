let frutas = ['banana', 'morango', 'maçã', 'uva'];

frutas.forEach(fruta => {
    console.log(fruta)
});

for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}

//

const notas = [8, 9, 10];

let somaDasNotas = 0;

notas.forEach(nota => {
    somaDasNotas += nota;
})
 let media = somaDasNotas / notas.length
 console.log (`A média das notas é ${media}`);

 //MAP faz operações em cima de cada item e retorna um novo array

 let notaComPontoAdicional = notas.map( nota => {
     if (nota == 10){
         return nota;
     }else
     return nota += 1;
 });

 console.log(notaComPontoAdicional)

 const nomes = ['rafael', 'jão', 'zé'];

 const nomeUpperCase = nomes.map(nome => nome.toUpperCase());

 console.log(nomeUpperCase)

 //FILTER

const nomesAlunos = ['Ana', 'Paulo', 'Marcos'];
const notasAlunos = [7, 6, 5];
const reprovados = nomesAlunos.filter((aluno, indice) => notasAlunos[indice] < 7);

console.log(`Os alunos reprovados foram: ${reprovados}`)


//REDUCE

const notasReduce = [10, 9, 8, 7];
const mediaReduce = notasReduce.reduce((acum, atual) => (acum + atual) ,0) / notasReduce.length;

console.log(mediaReduce)

