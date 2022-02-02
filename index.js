const chalk = require('chalk');
const fs = require('fs');//filesystem

function extraiLinks(texto) {
	const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm ;
	const arrayResultados = [];
	let temp;

	while((temp = regex.exec(texto)) !== null){
		arrayResultados.push({ [temp[1]]: temp[2]})
	}


	return arrayResultados.length == 0 ? 'Não há links': arrayResultados;
}

function trataErro(erro){
	throw new Error(chalk.red.bgWhite(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo){
	const encoding = 'utf-8';
	try{
		const texto = await fs.promises.readFile(caminhoDoArquivo,encoding)
		return extraiLinks(texto);
	} 
	catch(erro){
		trataErro(erro)

	}
}



module.exports = pegaArquivo;






// function pegaArquivo(caminhoDoArquivo){
// 	const encoding = 'utf-8';
// 	fs.promises
// 	.readFile(caminhoDoArquivo,encoding)
// 	.then((texto) => console.log(chalk.green(texto)))
// 	.catch((erro) => trataErro(erro))
// }

// function promessa(bool) {
// 	const x = bool;
// 	return new Promise((resolve, reject) => {
// 	  if (!x) {
// 		reject(new Error("falha na promessa"));
// 	  }
// 	  resolve("sucesso na promessa");
// 	});
// }
   
// function exibeResposta(textoResult) {
// 	console.log(textoResult);
// }
   
// promessa(false)
// .then((texto) => exibeResposta(texto))
// sucesso na promessa


// function pegaArquivo(caminhoDoArquivo){
// 	const encoding = 'utf-8';
// 	fs.readFile(caminhoDoArquivo, encoding, (erro, texto) =>
// 		{
// 			if(erro){
// 				trataErro(erro);
// 			}
// 			console.log(chalk.green(texto));
			
// 		})
// }










// console.log(chalk.blue('Hello World!'));

// const parafrago = 'Texto retornado por uma função';

// function texto(string){
// 	return string;
// }

// console.log(texto(parafrago));

// //encadear métodos para colorir texto, cor de fundo e texto em negrito
// console.log(chalk.blue.bgRed.bold('Alura'));

// //receber múltiplos argumentos
// console.log(chalk.blue('curso', 'de', 'NodeJS'));

// //métodos aninhados
// console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

// // uso de template strings e placeholders
// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

