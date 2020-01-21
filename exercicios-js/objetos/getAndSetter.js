const sequencia = {
    _valor1: 1, //convenção
    //retorna o valor
    get valor(){
        return this._valor++
    },
    //Atribuir valores quando achar necessário
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
        
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
