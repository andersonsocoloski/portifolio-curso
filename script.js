let texto = document.querySelector("#texto");
texto.textContent = "Anderson";

let nome = prompt("Qual o seu nome?");
if (texto.textContent == null){
    texto.textContent = "Seja Bem Vindo(a)!";
}
else {
    texto.textcontent = nome;
}
texto.textContent = nome;


