let mueble = {
    precio:200,
    tipo:"mesa",
    origen:"España",
    material:"madera",
    color:"blanco"
};

//Accedemos a una propiedad del mueble
console.log("El color es", mueble.color);

//Borrar una propiedad
delete mueble.origen;

//Mostramos las propiedades de mueble
console.log(mueble);

//Añadimos una propiedad
mueble.origen="España";
console.log(mueble);

//Añadimos una función a un objeto. Hay que poner los this. El this hace que busque dentro de las propiedades de la clase mueble; si no lo ponemos, busca una variable que se llame así fuera de la clase. El this sólo se pone cuando estamos dentro de un método
mueble.describir = function() {
    return "Es una " + this.tipo + " de " + this.material + " que vale " + this.precio + " euros"
};
console.log(mueble.describir());