// codigos do index refatorados para texte

const chalk = require('chalk');
const { errorMonitor } = require('events');
const fs = require('fs');

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "-> não há arquivo no caminho"));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
    } catch(erro) {
      trataErro(erro);
    } finally {
      console.log(chalk.yellow('operação concluída'));
    }
   }

pegaArquivo('./arquivos/');