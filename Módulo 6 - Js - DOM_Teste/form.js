const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const name = document.querySelector('input[name = "nameClient"]').value
    const adress = document.querySelector('input[name= "localAdress"]')
    const breadType = document.querySelector('select[name= "breadType"]')
    const main = document.querySelector('input[name = "main"]') 
    const obs = document.querySelector('textArea[name = "obs"]')

    console.log({name})
})