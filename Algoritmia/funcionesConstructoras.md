#Ejercicio funcion constructora
```javascript
// Funcion Persona
function Persona(nombre, peso, altura){
 this.nombre = nombre
 this.peso = peso
 this.altura = altura
}
Persona.prototype.saludar = function(nombre){
	return `Hola ${nombre} me llamo ${this.nombre}`
}
Persona.prototype.bmi = function(){
	return (this.peso)/(this.altura*2)
}
// Funcion Auto
function Auto(){
	this.velocidad = 0
}
Auto.prototype.acelerar = function(num){
	this.velocidad += num
}
Auto.prototype.frenar = function(num1){
	this.velocidad -= num1
	if(this.velocidad<0){
  	    this.velocidad = 0
    } 
}
```