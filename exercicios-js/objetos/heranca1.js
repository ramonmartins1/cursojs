const ferrari ={
    modelo: 'f40',
    velMax: 324
}

const volvo ={
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__)
//Objeto de alto nivel Object.prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){

}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype.__proto__)