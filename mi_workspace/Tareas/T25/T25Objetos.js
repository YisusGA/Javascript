//Cuidado: clase es un objeto, no una clase
const clase = {
  curso: "1º GS",
  aula: "Aula 204",
  profesor: "Miguel",
  numAlumnos: 25,
  asignaturas: ["Programación", "Bases de Datos", "Sistemas"],

  mostrarInfo() {
    return `Curso: ${this.curso}, Aula: ${this.aula}, Profesor: ${this.profesor}`;
  }
};

//Parte 1. Acceso a propiedades
console.log(clase.curso);
console.log(clase.aula);
console.log(clase.numAlumnos);

//Parte 2. Modificación de propiedades
clase.aula = "Aula 211";
clase.numAlumnos = 30;
console.log("Aula: " + clase.aula + ". Número de alumnos: " + clase.numAlumnos);

//Parte 3. Añadir nuevas propiedades
clase.turno = "mañana";
clase.cursoActivo = true;
console.log(clase);

//Parte 4. Trabajo con métodos
console.log(clase.mostrarInfo());
//La palabra this dentro del método mostrarInfo() cumple la función esencial de indicarle al método que nos estamos refiriendo a la propiedad definida dentro del objeto, y no a cualquier otra propiedad con el mismo nombre que se encuentre fuera del objeto

//Parte 5. Modificación dinámica del objeto
clase.aula = "Aula 204";
clase.numAlumnos = 25;
clase.resumen = function() {
  return `${this.curso} - ${this.aula} - ${this.numAlumnos} alumnos`;
};
console.log("Probando el nuevo método: ", clase.resumen());

//Parte 6. Eliminación de propiedades
delete clase.cursoActivo;
console.log(clase);

//Parte 7. Objetos y referencia
const otraClase = clase;
otraClase.aula = "Aula 300";
console.log("Nueva aula en el objeto otraClase: ", otraClase.aula);
