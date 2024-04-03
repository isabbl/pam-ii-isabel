let num1 = 2
const num2 = 3
var msg = "esse é o numero:"

console.log(msg, num1)
console.log(num1 + num2)
console.log(typeof num1)
console.log(typeof msg)

function somar () {
    lero=4
    lero2=3

    console.log ("resultado:" , lero+lero2)
}
somar() //função é algo que eu crio , se executa pelo nome direto//

function somarcomparametros (n1,n2) {
    let resultado = "resultado" + (n1+n2)
    console.log(resultado)

}

somarcomparametros(16,30)

const teste = (n) => {
    let result = n % 2

    if (result ==1) {
        console.log("numero impar")
    }

    return "numero par"
}

console.log (teste(2))
console.log (teste(7))
console.log (teste(9))