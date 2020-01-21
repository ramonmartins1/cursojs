function compras(trabalho1, trabalho2){
const comprarSorvete = trabalho1 || trabalho2
const comprarTV50 = trabalho1 && trabalho2
const comrparTV32 = trabalho1 != trabalho2
const manterSaudavel = !comprarSorvete

return {comprarSorvete, comprarTV50, comrparTV32, manterSaudavel}


}

//console.log(compras(true, true))
console.log(compras(true, false))