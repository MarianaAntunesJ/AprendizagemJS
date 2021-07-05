//3 escopos: global, função e o bloco

var serie = 'Friends'

if(true){
var serie2 = 'Game of Thrones'
console.log(serie)
}

console.log(serie2)

console.log('<br />')

function x(){
var serie3 = 'The Walking Dead'
console.log(serie)
console.log(serie2)
}

x()

console.log('<br />')
console.log(serie3) //não renderiza