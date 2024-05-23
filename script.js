function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var boa = document.getElementById('boa')
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora < 5){
        img.src = 'noite.png'
        document.body.style.background = '#2a2a52'
        boa.innerHTML = `Boa madrugada!`
    } else if (hora < 12){
        img.src = 'manhã.png'
        document.body.style.background = '#faed8c'
        boa.innerHTML = `Bom dia!`
    } else if (hora < 19){
        img.src = 'tarde.png'
        document.body.style.background = '#fab078'
        boa.innerHTML = `Boa tarde!`
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#2a2a52'
        boa.innerHTML = `Boa noite!`
    }
}