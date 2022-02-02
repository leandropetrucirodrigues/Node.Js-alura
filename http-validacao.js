const fetch = require('node-fetch');

function manejaErros(erro){
    throw new Error(erro.message);
}


async function checaStatus(arrayURLs){
    // promises async await

    try{
        const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
                const res = await fetch(url)
                return ` Código: ${res.status} - Descrição ${res.statusText}  - ${res.values}`;;
                }
            )
        )
        return arrayStatus;
    }catch(erro){
        manejaErros(erro);
    }
    
}


function geraArrayDeURLs(arrayLinks){
    //loop para cada {chave: valor}

    //Object.values(objeto)
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink)
                .join()
        );

}

async function validaURLs(arrayLinks){
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    // console.log(arrayLinks, statusLinks);
    // return statusLinks;
    const resultados = arrayLinks.map((objeto, indice) => 
        (
            {
                ...objeto,
                 status: statusLinks[indice]  
            }
        ) 
    )
    return resultados;

}

module.exports = validaURLs;