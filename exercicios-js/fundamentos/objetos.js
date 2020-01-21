const prod1 = {}

prod1.nome = 'Celular'
prod1.preco = 3000.50
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
} //Objeto é uma coleção de chaves e valor

console.log(prod2)

'{"nome": "Camisa Polo", "preco":79,90}' //JSON

//JSON não é um objeto é um formato textutal
