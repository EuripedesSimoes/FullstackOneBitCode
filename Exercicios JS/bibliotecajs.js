let estante = []
let opcao = ""

/*for (n=1;n<10;n++) {
    alert(n)
}*/

/*let n = 1

while (n < 10)
{   n++
    alert(n)
}*/

do {
/*alert(estante)*/
let livro = ""
let i = 0
/*while( i < estante.length)
{ i++
    livro += (i + 1) + "ª - " +  estante[i] + "\n"
    */
for (let i = 0; i < estante.length; i++) {
    livro += (i + 1) + "ª - " +  estante[i] + "\n" 
}

opcao = prompt("Livros:\n" + livro + "Selecione uma das opcoes abaixo \n" + "a) adicionar livro \n" + "b) Tirar livro \n" + "c) Sair")

switch (opcao){
case "a": 
const novoLivro = prompt("Escreva o nome do livro")
estante.push(novoLivro)
break
case "c": 
alert("Você escolheu sair")
break

}

} while (opcao !== "c")