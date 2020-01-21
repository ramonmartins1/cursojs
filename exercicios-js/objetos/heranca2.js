// Cadeia de protótipo (prototype chain)
Object.prototype.attr0 = 'Z'
const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B', attr3: '5'}
const filho = {__proto__:pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
    },
    status(){
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari ={
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'v50',
    status(){
        //super referencia prototipo
        return `${this.modelo}: ${super.status()}`
    }
}
//Setando prototipo de carro para ferrari (Objeto, prototipo)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())