//3 escopos: global, função e o bloco

var serie = 'Friends'

if(true){
var serie2 = 'Game of Thrones'
document.write(serie)
}

document.write(serie2)

document.write('<br />')

function x(){
var serie3 = 'The Walking Dead'
document.write(serie)
document.write(serie2)
}

x()

document.write('<br />')
document.write(serie3) //não renderiza