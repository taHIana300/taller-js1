/*
   pagar nomina a un empleado que recibe x sueldo,
    calcular cuanto se le debe descontar de salud 4%
     y pension 5% y cuanto seria su salario neto a recibir.
    
*/
/*
var sueldo = parseInt(prompt("digite su sueldo") );
var salud = sueldo * 4/100;//0.004
var pension = sueldo * 5/100; //0.005
salarioneto= sueldo - (salud + pension);

document.write("su salario es:"+sueldo+"<br>");
document.write("el dto en salud es:"+salud+"<br>");
document.write("el dto en pension es:"+pension+"<br>");
document.write("su salario a pagar es:"+salarioneto+"<br>");
/*
/*punto 1 */

/* punto 2
aplica la formula a = (b*h)/2
para calcular el area de un triangulo donde sus dimensiones
base y altura se deben perdir al usuario

/* 
var base = parseFloat(prompt("digite base del triangulo"));
var altura = parseFloat(prompt("digite altura del triangulo"));
var area = (base * altura)/2;
document.write("la base del triangulo es: "+base+"<br>");
document.write("la altura del triangulo es: "+altura+"<br>");
document.write("el area del del triangulo es: "+area+"<br>");
*/

/* punto 3 */
/*
 var numero1 = parseInt(prompt("digite numero 1"));
 var numero2 = parseInt(prompt("digite el numero 2"));
 var suma = numero1 + numero2;
 var resta = numero1 - numero2;
 var multi = numero1  * numero2;
 var divisi= numero1 / numero2;
 var modulo = numero1 % numero2;

 document.write("la suma es:" +suma+"<br>");
 document.write("la resta es:" +resta+"<br>");
 document.write("la resta es:" +resta+"<br>");
 document.write("la resta es:" +resta+"<br>");
*/
/* punta 5*/
/*
var precioproductos = parseFloat(prompt("ingrese el precio de el producto"));
var iva = precioproductos*0.19
var ivaAgredado = precioproductos+iva;
var productosSin = iva-precioproductos;
var total  = precioproductos+iva;

document.write("el precio producto es:" +precioproductos+"<br>");
document.write("el precio del producto con iva es:" +iva+"<br>");
document.write("el total a pagar es:" +total+"<br>");
*/
/*
calcule el promedio de 3 notas de un alumno, el Rango
de cada nota es del 1 al 5.
*/
var nombre = (prompt("digite el nombre del alumno"));
var nota1 = parseFloat(prompt("digite nota "));
var nota2 = parseFloat(prompt("digite nota "));
var nota3 = parseFloat(prompt("digite nota "));
promedio = (nota1+nota2+nota3)/3

document.write("El promedio es de :" +promedio+"<br>");
document.write("el nombre del alumno es:"+nombre+"<br>");


