const prompt=require("prompt-sync")({sigint:true});
while (true) {
    let num1 = prompt("Masukkan angka pertama: ");
    let num2 = prompt("Masukkan angka kedua: ");
    let result;
    let operator = prompt("Masukkan operator (+, -, *, /, %): ");
    switch (operator) {
        case "+":
            result = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            result = parseInt(num1) - parseInt(num2);
            break;
        case "*":
            result = parseInt(num1) * parseInt(num2);
            break;
        case "/":
            result = parseInt(num1) / parseInt(num2);
            break;
        case "%":
            result = parseInt(num1) % parseInt(num2);
            break;
        default:
            result = "Operator tidak dikenal";
            break;
    }
    console.log(`${num1} ${operator} ${num2} = ${result}`);
}