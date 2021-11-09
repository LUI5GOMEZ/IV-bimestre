let i = prompt("ingrese un año pls: ")
if(i<0){
    alert("ERROR")
}
else if(i%4 !=0 || (i %100==0 && i%400 !=0)){
    alert("No es bisiesto")
}
else {
    alert("Es bisiesto")
} 