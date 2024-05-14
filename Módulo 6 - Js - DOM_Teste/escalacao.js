function addPlayer() {
    const position = document.getElementById('position').value

    const prancheta = document.getElementById("prancheta")
    const lip = document.createElement('li')
    lip.innerText = position + ' Numero tal'

    prancheta.appendChild(lip)

    document.getElementById('position').value = ''
}