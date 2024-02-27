//variaveis

let nome;
let idade;

nome = "Vivi";
idade = 17;

const altura = 1.68;

let bol = true
let lista = ["uva", "pera", "kiwi"];
let objeto = {nome: "Maria", idade: 18};


//operadores aritimeticos

let a = 10;
let b = 5;

let soma = a+b;
let subtracao = a-b;
let multiplicacao = a*b;
divisao = a/b;
let resto = a%b;


//operadores de atribuição

let x = 10;

x += 5;//x = x + 5 (15)
x -= 3;//x = x - 3 (12) 
x *= 2;//x = x * 2 (24)
x /= 4;// x = x / 4 (6)


//operadores de comparação logica

idade = 20;
let temCNH = true;

console.log(idade > 18);
console.log(idade === 20);
console.log(idade !== 18)
console.log(idade > 18 && temCNH);
console.log(idade > 18 || temCNH);
console.log(!temCNH)

//estrutura de condicional

let hora = 12;

if(hora<12){
    console.log("bom dia");
} 
else if (hora >= 12 && hora <=18){
    console.log("boa tarde");
}
else{
    console.log("boa noite");
}


//estrutura de repetição

for (let i = 0; 1<10; i++){
    console.log(i)
}

let contador = 0
while (contador<5){
    console.log(contador);
    contador++;
}