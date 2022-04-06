const livros = [20, 40, 15, 50, 60];

let menorPreco = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if ( livros[atual] < livros[menorPreco] ) {
        menorPreco = atual;
    }
}

console.log(`O livro mais barato custa R$ ${livros[menorPreco]}`)