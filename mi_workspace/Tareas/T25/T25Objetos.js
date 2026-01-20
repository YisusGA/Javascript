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
