const valores = [7.7, 8.9, 6.3, 9.1]
console.log(valores[0], valores[3])

console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())

delete valores[0]

console.log(valores)