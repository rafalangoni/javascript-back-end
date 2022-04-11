// const chalk = require('chalk');
// const fs = require('fs');
import fs from 'fs'
import chalk from 'chalk';

function getError(error){
  throw new Error(error);
}

function getFile(filepath){
  const encoding = 'utf-8';
  fs.readFile(filepath, encoding, (error, data) => {
    if(error){
      getError(error);
    }
    console.log(chalk.green(data));
  })
}

getFile('./arquivos/texto1.md');
