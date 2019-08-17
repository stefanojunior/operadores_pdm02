let nome = "João";
let idade = 18;
const sexo = "M";

if (nome === "Stefano" && idade === 18) {
    console.log("Entrou no if")
}
else {
    console.log("Entrou no else")
}

if (idade >= 18 && sexo == "M") {
    console.log("Voce nao possui desconto");
}
else if (idade >= 18 && sexo == "M") 
{
    console.log("Voce tem 20% desconto e um refrigerante");
}
else if (sexo == "F") {
    console.log("Voce tem 20% desconto");
}
else {
    console.log("Voce tem 10% desconto");
}

