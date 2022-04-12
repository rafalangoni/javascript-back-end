// const chalk = require('chalk');
// const fs = require('fs');
import fs from 'fs'
import chalk from 'chalk';

function getError(erro){
  throw new Error(erro);
}

//ASYNC/AWAIT
async function pegarArquivo(caminhoDoArquivo){
  const encoding = 'utf-8';
  try{
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto));
  }catch(erro){
    getError(erro);
  }
}

//PROMISES
// function pegarArquivo(caminhoDoArquivo){
//   const encoding = 'utf-8'
//   fs.promises
//   .readFile(caminhoDoArquivo, encoding)
//   .then((texto) => (console.log(texto)))
//   .catch((erro) => getError(erro))
// }

// function pegarArquivo(caminhoDoArquivo){
//   const encoding = 'utf-8';
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if(erro){
//       getError(erro);
//     }
//     console.log(chalk.green(texto));
//   })
// }

pegarArquivo('./arquivos/texto.md');
