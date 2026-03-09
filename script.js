let lista1 = []
let lista2 = []
let operadorAtivo = false
let display
let resultado

function addNumero(e){
    const mostrador = document.getElementById("mostrador")
        if(operadorAtivo == false){
            lista1.push(e)
            display = lista1.join("")
            mostrador.textContent = display
        }else if(operadorAtivo == true){
            lista2.push(e)
            display = lista2.join("")
            mostrador.textContent = display
        }
}

function escolherOperador(e){
    operadorAtivo = true
    let numero1 = parseInt(lista1.join(""))
    let numero2 = parseInt(lista2.join(""))
    
    
    switch(e){
        case "+": resultado = numero1 + numero2; break;
        case "-": resultado = numero1 - numero2; break;
        case "X": resultado = numero1 * numero2; break;
        case "%": resultado = numero1 / numero2;  break;
    }
}

function mostrarResultado(e){
    const mostrador = document.getElementById("mostrador")
    display = resultado
    mostrador.textContent = display
    operadorAtivo = false
    resultado = 0;
    lista1 = null
    lista2 = null
}