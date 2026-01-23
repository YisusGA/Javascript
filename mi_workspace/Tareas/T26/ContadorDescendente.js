function cuentaAtras(num) {
    if (num <= 0) {
        console.log("El numero debe ser mayor que 0");
    } else {
        while (num >= 0) {
            console.log(num);
            num--;
        }     
    }
}
cuentaAtras(5);