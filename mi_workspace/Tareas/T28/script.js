const mensaje1 = document.getElementById("mensaje");
const mensaje2 = document.querySelector("mensaje");
const equal = false;

function print() {
    console.log(mensaje1);
    console.log(mensaje2);
    const equal = false;
    if (mensaje1 === mensaje2) {
        equal = true;
    }
    console.log(equal);
};
const probar = document.querySelector("botones");
probar.addEventListener("click", print);