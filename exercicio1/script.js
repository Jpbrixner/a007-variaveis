//Criando as variaveis

let nome = null  
let idade = null

console.log(typeof(nome))
console.log(typeof(idade))

/* Aparece object nos tipos que é pelo fato de não
colocarmos nomes ou valores as variaveis intencionalmente*/

nome = prompt("Qual é o seu nome?")
console.log(nome)
idade = prompt("Qual é a sua idade?")
console.log(idade)

/*tive que colocar a variavel nome como let, pois se colocar como 
const não posso alterar ela e ocorre um erro no site*/

console.log(typeof(nome))
console.log(typeof(idade))

/* o tipo das duas variaveis vão ser string, pois sempre que fizer
typeof sobre um prompt o resultado vai ser string*/

console.log("Ola", nome, "você tem", idade, "anos")