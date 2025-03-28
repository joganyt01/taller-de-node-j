const num1= parseInt(process.argv[2]);
const num2=parseInt(process.argv[3]);
if (!isNaN(num1) && !isNaN(num2)) {
    console.log(`La suma es: ${num1 + num2}`);
} else {
    console.log('Por favor, ingresa dos números válidos.');
}

