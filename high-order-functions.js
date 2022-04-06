const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const usuarioLogin = (nome) => {
    let array = []
    for( i = 0; i < 9000; i++){
      array.push(i)
    }
    return acesso(nome)
  }
  
  usuarioLogin("Luke")