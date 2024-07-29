const caixa1 = document.querySelector('div#cont1')
const caixa2 = document.querySelector('div#cont2')
const bttn = document.querySelector('button#copia')
const cursos = [...document.querySelectorAll('.ling')]

cursos.map((evt) => {
   evt.addEventListener('click',(el) => {
    const elem = el.target
    elem.classList.toggle('selecionado')
   })
})



bttn.addEventListener('click', () => {
    const cursosSelected = [...document.querySelectorAll('.selecionado')]
    const cursosNotSelected = [...document.querySelectorAll('.ling:not(.selecionado)')]
    cursosNotSelected.map((el1) => {
        caixa1.appendChild(el1)
    })
    cursosSelected.map((el) => {
        caixa2.appendChild(el)
    })
    //console.log(cursosSelected)
})
