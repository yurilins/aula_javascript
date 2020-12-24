
function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com/");
    window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigado!";
    elemento.innerHTML = "Obrigado!";
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Bem vindo");
}

function funcaoChange(elemento){
    console.log(elemento.value);

}



/*
function soma (n1,n2){
    return n1 + n2;
}
alert(soma(5, 10));


function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão!", "Japão", "Brasil"));

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/
/*
var d = new Date();
alert(d.getMinutes());
*/

/*
var count;

    for(count=0; count <=5; count++){
        console.log(count);
    }

*/

/*
var count=0;
while (count <= 5){
    console.log(count);
    count++;
}
*/


/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/
    



//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

//var lista = ["primeiro", "segundo", "terçeiro"];
//lista.push ("quarto");
//lista.pop ();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("|"));





//var nome = " Yuri Lins";
//var n1 = 27;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"));