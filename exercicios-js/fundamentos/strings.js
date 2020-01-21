const escola = "Cod3r"

console.log(escola.charAt(4)) //Verifica a letra no indice 4
console.log(escola.charCodeAt(3))//Codigo na tabela Code
console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3,'e'))
console.log(escola.replace(/\d/, 'e'))//substituir todos os digitos pela letra e
console.log('Ana,Maria,Pedro'.split(','))
