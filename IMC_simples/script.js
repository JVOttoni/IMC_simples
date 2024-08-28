function calcular() {
    var peso = document.querySelector('input#peso')
    var altura = document.querySelector('input#altura')
    var res = document.querySelector('div#res')
    var n1 = Number(peso.value)
    var n2 = Number(altura.value)
    var calc = n1/n2**2
    res.innerHTML = calc.toFixed(2)

    if(document.querySelector('input#peso').value == '') {
        alert('Por favor, preencha o campo peso.')
        document.querySelector('input#peso').focus()
        return false
    }else if (document.querySelector('input#altura').value == '') {
        alert('Por favor, preencha o campo altura')
        document.querySelector('input#altura').focus()
        return false
    }else if (document.querySelector('input#idad').value == ''){
        alert('Por favor, preencha o campo idade.')
        document.querySelector('input#idad').focus()
        return false
    }
    
    if (calc <= 18.5) {
       res.innerHTML = `Seu IMC é ${calc.toFixed(2)} e sua classificação é <strong>MAGREZA<strong>.`
    }else if (calc <= 24.9) {
        res.innerHTML = `Seu IMC é ${calc.toFixed(2)} e sua classificação é <strong>NORMAL<strong>.`
    }else if (calc <= 29.9) {
        res.innerHTML = `Seu IMC é ${calc.toFixed(2)} e sua classificação é <strong>SOBREPESO<strong>.`
    }else if (calc <= 39.9) {
        res.innerHTML = `Seu IMC é ${calc.toFixed(2)} e sua classificação é <strong>OBESIDADE<strong>.`
    }else if (calc > 40){
        res.innerHTML = `Seu IMC é ${calc.toFixed(2)} e sua classificação é <strong>OBESIDADE GRAVE<strong>.`
    }
    
    
}
