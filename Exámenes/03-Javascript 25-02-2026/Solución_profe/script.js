 
/* ----------------------------------------------------------------- */
/* Definición de variables                                           */
/* ----------------------------------------------------------------- */

  // Formulario
  let formCandidato    = document.getElementById("solicitudForm")

  let chkLegal         = document.getElementById("legal")
  let chkTratDatos     = document.getElementById("rgpd")

  let txtNombre        = document.getElementById("nombre")
  let txtApellidos     = document.getElementById("apellidos")
  let txtEmail         = document.getElementById("email")
  
  let numExperiencia   = document.getElementById("experiencia")

  let selArea          = document.getElementById("area")
  let selDisponibilidad= document.getElementById("disponibilidad")

  let txtPreview       = document.getElementById("previsualizacion")


  // Calculadora
  let numA             = document.getElementById("numA")
  let numB             = document.getElementById("numB")

  let btnSuma          = document.getElementById("btnSuma")
  let btnResta         = document.getElementById("btnResta")
  let btnMultiplica    = document.getElementById("btnMultiplica")

  let txtResultado     = document.getElementById("resultadoCalc")


/* ----------------------------------------------------------------- */
/* Definción de funciones                                            */
/* ----------------------------------------------------------------- */

  function validarDatos (){

  // Validar que se han introducido los datos
   if (!txtNombre.value.trim()) {
      alert("Debe introducir un nombre")
     return false
   }

   if (!txtApellidos.value.trim()) {
      alert("Debe introducir los apellidos")
     return false
   }

   if (!txtEmail.value.trim()) {
      alert("Debe introducir el email")
     return false
   }

   if (!numExperiencia.value.trim()) {
      alert("Debe introducir la experiencia")
     return false
   }


   // Comprobar que se han introducido datos en los select
   if (!selArea.value) {
      alert("Debe seleccionar un área")
     return false
   }

   if (!selDisponibilidad.value) {
      alert("Debe indicar su disponibilidad")
     return false
   }


   // Comprobar que el check legal está marcado
   if (chkLegal.checked != true) {
     alert("No ha marcado que los datos son veraces")
     return false
   }

   // Comprobar que el check de aceptación de tratamiento de datos esté marcado
   if (chkTratDatos.checked != true) {
     alert("No ha aceptado el tratamiento de sus datos")
     return false
   }

   return true

  }

  // -----------------------------------------------------------------------------
  // Esta función llama a la función de validación de datos. Si los datos son correctos entonces
  // muestra el mensaje en la el texto de previsualización
  function mostrarDatos (event) {
    event.preventDefault();

   if (!validarDatos()) {

      return
   }  

   // En txtPreview mostramos los datos introducidos por el candidato
   

    let mensaje = `El candidato ${txtNombre.value.trim()} ${txtApellidos.value.trim()}
    confirma que tiene ${numExperiencia.value.trim()} años de experiencia en ${selArea.value}.
    Tiene una disponibilidad de ${selDisponibilidad.value} y acepta el tratamiento de datos.`

     txtPreview.textContent = mensaje

  }


  // Si el ratón entra en el formulario → ROJO 
  function ratonSobre () {
     document.body.style.backgroundColor = "red";
  }

  // Si el ratón sale del formulario → VERDE
  function ratonFuera () {
     document.body.style.backgroundColor = "green";
  }


  // Funciones de la calculadora
 function restaNumeros() {

   if (!numA.value) {return}
   if (!numB.value) {return}

    var a = parseFloat(numA.value);
    var b = parseFloat(numB.value);
   
    var res = a - b;
    txtResultado.textContent = "Resultado: " + res;

}

 function sumaNumeros() {

   if (!numA.value) {return}
   if (!numB.value) {return}

    var a = parseFloat(numA.value);
    var b = parseFloat(numB.value);
    
    var res = a + b;

    txtResultado.textContent = "Resultado: " + res;

 }

 function multiplicaNumeros() {

   if (!numA.value) {return}
   if (!numB.value) {return}

    var a = parseFloat(numA.value);
    var b = parseFloat(numB.value);
    
    var res = a * b;

    txtResultado.textContent = "Resultado: " + res;

 }


/* ----------------------------------------------------------------- */
/* Gestión de eventos                                                */
/* ----------------------------------------------------------------- */

  // Formulario
  formCandidato.addEventListener("submit", mostrarDatos )

  // Si el ratón entra en el formulario → ROJO 
  formCandidato.addEventListener("mouseover", ratonSobre)
  
  
  // Si el ratón fuera en el formulario → VERDE 
  formCandidato.addEventListener("mouseout", ratonFuera)


  // Calculadora
  btnSuma.addEventListener("click", sumaNumeros)
  btnResta.addEventListener("click", restaNumeros)
  btnMultiplica.addEventListener("click", multiplicaNumeros)





