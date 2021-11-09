let a = prompt("ingrese un numero: ")
let b = prompt("ingrese un numero: ")
let c = prompt("ingrese un numero: ")

if(a==b && b==c && a==c){
    alert("equilatero")
}
else if(a==b || a==c || b==c){
    alert("isosceles")
}
else{
    alert("escaleno")
}