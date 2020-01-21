const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.3]

//Sem callback

const notasBaixas1 = []

for (let i in notas){
    if(notas[i]<7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1);

//Com callback

//Recebe o elemento nota e retorna verdadeiro ou falso caso seja <7
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2);

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3);