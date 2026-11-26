function somar () {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = s
    res.innerHTML = `O Resultado da soma é: ${s}! `
}

function subtrair() {
    var tn3 = window.document.getElementById('txtn3')
    var tn4 = window.document.querySelector('input#txtn4')
    var sub = window.document.getElementById('sub')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var s = n3 - n4
    sub.innerHTML = s
    sub.innerHTML = `O Resultado da subtração é: ${s}! `
}

function multiplicar() {
    var tn5 = window.document.getElementById('txtn5')
    var tn6 = window.document.querySelector('input#txtn6')
    var mult = window.document.getElementById('mult')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var s = n5 * n6
    mult.innerHTML = s
    mult.innerHTML = `O Resultado da multiplicação é: ${s}! `
}

function dividir() {
    var tn7 = window.document.getElementById('txtn7')
    var tn8 = window.document.querySelector('input#txtn8')
    var div = window.document.getElementById('div')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var s = n7 / n8
    div.innerHTML = s
    div.innerHTML = `O Resultado da divisão é: ${s}! `
}
