//pessoa -> 123 ->{...}

const pessoa ={ nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- 456 -> {...}
//pessoa ={nome: 'Ana'}
//Método freeze congela o objeto e o torna constante
Object.freeze(pessoa)

pessoa.nome = 'Maria'

console.log(pessoa.nome)