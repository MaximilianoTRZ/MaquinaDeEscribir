const textoEnPantalla = document.getElementById("typeWriter")
const frases = ["Hola!", "Tu nariz contra mis bolas", "Tumbeado perri"]
let i = 0
let j = 0
let fraseActual = []
let estaBorrando = false
let estaTerminado = false

function loop() {
    estaTerminado = false

    if (i < frases.length) {

        if (!estaBorrando && j <= frases[i].length) {
            fraseActual.push(frases[i][j])
            j++
            textoEnPantalla.innerHTML = fraseActual.join("") + "_"
        }

        if (estaBorrando && j <= frases[i].length) {
            fraseActual.pop(frases[i][j])
            j--
            textoEnPantalla.innerHTML = fraseActual.join("") + "_"
        }

        if (j == frases[i].length) {
            estaTerminado = true
            estaBorrando = true
        }

        if (estaBorrando && j === 0) {
            fraseActual = []
            estaBorrando = false
            i++
            if (i == frases.length) {
                i = 0
            }
        }
    }

    const aceleracion = Math.random() * (80 - 50) + 50
    const velocidadNormal = Math.random() * (300 - 200) + 200
    const tiempo = estaTerminado ? 2000 : estaBorrando ? aceleracion : velocidadNormal
    setTimeout(loop, tiempo)
}

loop()
