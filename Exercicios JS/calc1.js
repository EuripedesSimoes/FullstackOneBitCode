// 1ª- Fazer o usuario escolher se quer calcular o se quer sair/se digitou errado
// 2ª- Ir na opcao digitada, conforme o calculo exigido pelo usuario se quiser calcular
// utilizando os cases, seguindo das funcoes 
// para cada caso, criar variaveis com as respectiveis formulas EX: let num = x, e dai colocar a funcao




let calc = prompt("Escolha uma das opções: \n" + "A) Calcular area do triangulo. \n" + "B) Calcular area do retangulo. \n" + "C) Calcular area do quadrado. \n" + "D) Calcular area do circulo\n" + "E) SAIR")
/*
let base = "x"
let altura = "x"
let raio = "x"*/

if (calc !== "a" && calc !== "b" && calc !== "c" && calc !== "d") {
    alert("Resposta Invalida")
    /*let base = prompt("Digite o value da base: ")
    let altura = prompt("Digite o valor da altura""")*/
}
else {

/*let base = prompt("Digite o valor da base: ")
let altura = prompt("Digite o valor da altura")
*/

/*switch (calc){
    case "a": prompt
}*/
switch(calc){
// CALCULAR TRIANGULO ============================================================
case ("a"):
    let base_a = prompt("Digite o valor da base: ")
    let altura_a = prompt("Digite o valor da altura")
    function calc_tri(x,y) {
        return (x*y)/2
    } let res1 = calc_tri(base_a, altura_a)
    alert("A area do triangulo é " + res1 + ".")
    break
// CALCULAR RETANGULO ===========================================================
case "b":
    let base_b = prompt("Escolha o valor da base: ")
    let altura_b = prompt("Escolha o valor da altura: ")
    function calc_ret(x,y){
        return x*y
    } let res2 = calc_ret(base_b, altura_b)
    alert("O resultado da area do retangulo é " + res2 + ".")
    break
// CALCULAR QUADRADO ============================================================
case "c":
    let lado = prompt("Escolha o valor do lado: ")
    function calc_quad(x){
        return x*x
    } let res3 = calc_quad(lado)
    alert(alert("O resultado da area do quadrado é " + res3 + "."))
    break
// CALCULAR RAIO ================================================================
case ("d"):
    let raio = prompt("Escolha o valor do raio")
    function calc_circ(x, y)
{   return x*(y*y)
} let res4 = calc_circ(3.14, raio)
    alert("O resultado da area do raio é " + res4 + ".")
    break

default: alert("Fim do calculo")
}
}



/*
if (calc == "b") {
    return (x*y)   
}
if 
}
let res = calcular(base, altura)
prompt(res)
}*/