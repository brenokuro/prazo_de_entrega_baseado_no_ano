// Função para calcular a data de entrega estimada
function calcularDataEntrega(anoAtual, prazoEntregaDias) {
   
    const dataEntrega = new Date(anoAtual, 0, 1); 

    //prazo de entrega em dias
    dataEntrega.setDate(dataEntrega.getDate() + prazoEntregaDias);

    const dia = String(dataEntrega.getDate()).padStart(2, '0');
    const mes = String(dataEntrega.getMonth() + 1).padStart(2, '0'); 
    const ano = dataEntrega.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
// teste
const anoAtual = 2023; 
const prazoEntregaDias = 15; 
const dataEstimativaEntrega = calcularDataEntrega(anoAtual, prazoEntregaDias);
console.log(`A data estimada de entrega é: ${dataEstimativaEntrega}`); 