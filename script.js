let texto = document.querySelector("#texto");
texto.textContent = "Anderson";

let nome = prompt("Qual o seu nome?");
if (nome == null){
    texto.textContent = "Seja Bem Vindo(a)!";
}
else {
    texto.textContent = nome;
}



