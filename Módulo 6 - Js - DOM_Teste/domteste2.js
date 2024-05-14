function apertado () {
    const btn1 = document.getElementById('botao1')
    btn1.innerText = 'Botao clicado'
    window.alert('Butao clicado')
}

function addLi () {
    const ul = document.getElementById('add_input') // identificacao basico

    const newli = document.createElement('li') // nome da tag, ou seja, li
    newli.className = 'list-item' //colocar uma classe no novo elemento
    newli.innerText = 'novo input' // colocar um texto no novo elemento

    const newinput = document.createElement('input') // nome da tag, ou seja, input
    newinput.type = 'text' //colocar o tipo do input Ex:texto, data, checklist
    newinput.name = 'input' // mesma coisa

    newli.appendChild(newinput) // o input vai ficar dentro do Li, como se estivesse sendo herdado
    ul.appendChild(newli) // o Li já com o novo input vai ser herdado para a ul
}

function addP () {
    const adic_par = document.getElementById('add_P')

    const newH3 = document.createElement('h3')
    newH3.innerText = 'Novo H3'

    const newP = document.createElement('p')
    newP.innerText = 'Novo Paragrafo'

    newH3.appendChild(newP)
    adic_par.appendChild(newH3)
}

function add_elem () {
    const add = document.getElementById('add_Elem') // nao funciona sem o appendChild()

    const new_h1 = document.createElement('h1')
    new_h1.innerText = 'novo h1'

    add.appendChild(new_h1) // agora vai funcionar
}