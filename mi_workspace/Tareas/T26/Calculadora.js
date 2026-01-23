
function calculadora(num1, num2, operador) {
    switch (operador) {
        case "+": 
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            if (num2 == 0) {
                return "División entre 0 no permitida"
            } else {
                return num1 / num2;
            }
            break;
    }
}

console.log(calculadora(23, 0, "/"));
