let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };


console.log("Bem-vinda,", info.personagem)

console.log("----------------------------------")

for(let i in info){
    console.log(i,info[i])
}
console.log("----------------------------------")