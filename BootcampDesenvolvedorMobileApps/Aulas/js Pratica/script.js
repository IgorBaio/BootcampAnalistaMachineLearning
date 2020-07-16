let cliente = {
   nome: "Igor",
   endereco: "Rua Marumbi, 647"
};
console.log(cliente);

cliente = {id:8,...cliente};
console.log(cliente);

function mostraNome(nome){
   console.info(nome);
}
mostraNome(cliente.nome);

const mostraEndereco = (endereco) => console.info(endereco);
mostraEndereco(cliente.endereco);