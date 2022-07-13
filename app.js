const input = document.getElementById('input'),
    botao_soma = document.getElementById('button_soma'),
    botao_sub = document.getElementById('button_sub'),
    botao_mult = document.getElementById('button_mult'),
    botao_div = document.getElementById('button_div'),
    botao_0 = document.getElementById('button_0'),
    botao_1 = document.getElementById('button_1'),
    botao_2 = document.getElementById('button_2'),
    botao_3 = document.getElementById('button_3'),
    botao_4 = document.getElementById('button_4'),
    botao_5 = document.getElementById('button_5'),
    botao_6 = document.getElementById('button_6'),
    botao_7 = document.getElementById('button_7'),
    botao_8 = document.getElementById('button_8'),
    botao_9 = document.getElementById('button_9'),
    button_calcular = document.querySelector('.button_calcular')

{
    //botoes para input
    button_soma.addEventListener('click', () => {
        input.value += '+'
    })

    button_sub.addEventListener('click', () => {
        input.value += '-'
    })

    button_mult.addEventListener('click', () => {
        input.value += '*'
    })

    button_div.addEventListener('click', () => {
        input.value += '/'
    })

    button_0.addEventListener('click', () => {
        input.value += '0'
    })

    button_1.addEventListener('click', () => {
        input.value += '1'
    })

    button_2.addEventListener('click', () => {
        input.value += '2'
    })

    button_3.addEventListener('click', () => {
        input.value += '3'
    })

    button_4.addEventListener('click', () => {
        input.value += '4'
    })

    button_5.addEventListener('click', () => {
        input.value += '5'
    })

    button_6.addEventListener('click', () => {
        input.value += '6'
    })

    button_7.addEventListener('click', () => {
        input.value += '7'
    })

    button_8.addEventListener('click', () => {
        input.value += '8'
    })

    button_9.addEventListener('click', () => {
        input.value += '9'
    })

    button_calcular.addEventListener('click', () => {
        separador = '+'
        const stringSeparada = separaString(input.value, separador)
        console.log(stringSeparada)
    })
}

function separaString(stringParaSeparar, separador) {
    const vetorString = stringParaSeparar.split(separador)
    return vetorString
}
