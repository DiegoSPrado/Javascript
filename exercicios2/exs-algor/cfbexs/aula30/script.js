//const c1 = document.querySelector('#c1');
const cursos = [...document.querySelectorAll('.ling')]

cursos.map((evt) => {
    evt.addEventListener('click', (el) => {
        const ele = el.target
        ele.classList.add("destaque")
    })
})



/*c1.addEventListener('click', (el) => {
    const box = el.target
    box.classList.add("destaque")
})*/