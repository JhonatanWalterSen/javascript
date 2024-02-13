function resultado(resultado) {
    document.getElementById('resultado').value = resultado
}

function sumar() {
    let valor1 = +document.getElementById('numero1').value
    let valor2 = +document.getElementById('numero2').value
    resultado(valor1+valor2)
}

function restar() {
    let valor1 = +document.getElementById('numero1').value
    let valor2 = +document.getElementById('numero2').value
    resultado(valor1-valor2)
}

function multiplicar() {
    let valor1 = +document.getElementById('numero1').value
    let valor2 = +document.getElementById('numero2').value
    resultado(valor1*valor2)
}

function dividir() {
    let valor1 = +document.getElementById('numero1').value
    let valor2 = +document.getElementById('numero2').value
    resultado(valor1/valor2)
}

function raiz() {
    let valor = +document.getElementById('numero2').value
    resultado(Math.sqrt(valor))
}

function potencia() {
    let valor1 = +document.getElementById('numero1').value
    let valor2 = +document.getElementById('numero2').value
    resultado(Math.pow(valor1,valor2))
}

function absoluto() {
    let valor = +document.getElementById('numero2').value
    resultado(Math.abs(valor))
}

function random() {
    let min = +document.getElementById('numero1').value
    let max = +document.getElementById('numero2').value
    max = max + 1
    resultado(Math.floor(Math.random() * (min,max) + min))
}

function redondear() {
    let resultadoMath = +document.getElementById('resultado').value
    resultado(Math.round(resultadoMath))
}

function techo() {
    let resultadoMath = +document.getElementById('resultado').value
    resultado(Math.cell(resultadoMath))
}

function piso() {
    let resultadoMath = +document.getElementById('resultado').value
    resultado(Math.floor(resultadoMath))
}