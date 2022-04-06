const cliente = {
    nome: "Rafael",
    profissao: "bancario",
    telefone: 123456879,
    idade: 37,
    dependentes: [{
        nome: "Natalia"
    },
    {
        nome: "Davi"
    }
]
}

console.log(cliente)
cliente.cpf = "123.456.789-65";
cliente.cpf = cliente.cpf.substring(0,4);
console.log(cliente)


//DELETANDO PROPRIEDADES
delete cliente.profissao;
console.log(cliente)

//CRIANDO NOVO OBJETO A PARTIR DE UM PROTOTIPO
const novoCliente = Object.create(cliente);
console.log(novoCliente)

let relatorio = "";

//FOR IN

for(let info in cliente){
    if(typeof cliente[info] === "function" || typeof cliente[info] === "object"){
        continue
    }else[
        relatorio += `
        ${info} => ${cliente[info]}
        `
    ]
}
console.log(relatorio)

const testeJson = {
    nome: "Teste Json.parse",
    valor: 1
}

//SPREAD OPERATOR

const personagem = {
    nome: "Aragorn",
    funcao: "guerreiro"
}

const equipamentoPersonagem = {
    tipo: "Espada",
    poder: "Mágico"
}

const personagemCompleto = {...personagem, ...equipamentoPersonagem}
console.log(personagemCompleto)

//JSON

const objToJson = JSON.stringify(testeJson);
console.log(objToJson)

const JsonToObj = JSON.parse(objToJson)
console.log(JsonToObj)