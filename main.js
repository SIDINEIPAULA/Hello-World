let nomeUsuário ="";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário =  prompt("Qual é o seu nome?");
}
elemento.textContent = nomeUsuário;
if(nomeUsuário == null){
    elemento.textContent = "seja muito bem vindo.";
} else {
    elemento.textContent = nomeUsuário;
}