var btn = document.getElementById('botao')
btn.addEventListener('click', verificar)

function verificar() {
    var anoNasc = Number(document.getElementById('innum'))
    var agr = new Date()
    var anoAt = Number(agr.getFullYear())
    var idade = Number( anoAt - anoNasc)
    var res = document.getElementById('result')
    res.innerHTML = `Voce tem ${idade} anos`
}