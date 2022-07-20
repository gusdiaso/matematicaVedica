//_____________ DECLARAÇÃO _____________//

let operador = undefined

const input = document.getElementById('input'),
    button_calcular = document.querySelector('.button_calcular')

//_______________ CODIGO _______________//

button_calcular.addEventListener('click', () => {
    const stringSeparada = separaString(input.value)
    if (stringSeparada[stringSeparada.length - 1] == '') {
        stringSeparada.pop()
    }
    if (input.value == '') {
        alert('Nada foi digitado')
    }
    console.log(stringSeparada)
})

function separaString(stringParaSeparar) {
    let separadorSelecionado = pegaOperador(stringParaSeparar)
    //pega cada numero separado pelo operador
    return stringParaSeparar.split(separadorSelecionado)
}

function pegaOperador(string) {
    const separador = ['+', '-', '*', '/']
    let vetorCaracter = string.split('')
    let separadorSelecionado

    //pega operador
    for (let i = 0; i < vetorCaracter.length; i++) {
        if (separador.includes(vetorCaracter[i])) {
            separadorSelecionado = vetorCaracter[i]
            console.log(separadorSelecionado)
        }
    }
    return separadorSelecionado
}

function insereInput(valor) {
    const inicialProibido = ['0', '+', '-', '*', '/']
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const arrayCaracter = input.value.split('')

    //pega variavel glogal operador e define o primeiro operador inserido como operador "único"
    if (operador == undefined) {
        operador = pegaOperador(input.value)
    }

    //validação

    //primeiro input nao pode ser ['0', '+', '-', '*', '/']
    if (input.value.length == 0 && inicialProibido.includes(valor)) {
        alert('Operação não pode começar com um zero ou com operadores!')
    }
    //pós operador o input nao pode ser ['0', '+', '-', '*', '/']
    else if (
        arrayCaracter[arrayCaracter.length - 1] == operador &&
        inicialProibido.includes(valor)
    ) {
        alert('Não insira um zero ou operador após outro operador!')
    }
    //proibir entrada de outro operador sem ser o operador unico
    else if (
        valor != operador &&
        operador != undefined &&
        !numeros.includes(valor)
    ) {
        alert('Utilize apenas o primeiro operador escolhido!')
        console.log(operador)
    }
    //outros casos sao permitidos
    else {
        input.value += valor
    }
}
