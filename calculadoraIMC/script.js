function calcularIMC() {

    // Entrada
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    let txt = "";

    // Calculadora IMC
    const imc = peso/(altura*altura);

    // Resultado do IMC
    if (imc < 18.5) {

        txt = "abaixo do peso.";
    } else if (imc >= 40) {

        txt = "com obesidade mórbida.";
    } else if (imc >= 35) {

        txt = "com obesidade grau II.";
    } else if (imc >= 30) {

        txt = "com obesidade grau I.";
    } else if (imc >= 25) {

        txt = "com sobrepeso."
    } else {

        txt = "no peso normal.";
    }

    // Exibição do resultado
    document.getElementById("imc").textContent = "O seu IMC é " + imc.toFixed(2) + ". Você está " + txt
}