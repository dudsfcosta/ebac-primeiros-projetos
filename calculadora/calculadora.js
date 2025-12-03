function calcularDesconto () {

    // Entrada
    let valorOriginal = document.getElementById("valorOriginal").value;
    let desconto = document.getElementById("desconto").value;

    console.log(valorOriginal);

    // Desconto
    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto

    //Saída
    document.getElementById("resultado").textContent = "Valor final: " + valorFinal
}