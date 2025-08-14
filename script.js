// Função para calcular a data de entrega estimada
function calcularDataEntrega(anoAtual, prazoEntregaDias) {
    // Cria um objeto Date com o ano atual
    const dataEntrega = new Date(anoAtual, 0, 1); // Começa no primeiro dia do ano

    //prazo de entrega em dias
    dataEntrega.setDate(dataEntrega.getDate() + prazoEntregaDias);

    // para formatar a  data para o formato DD/MM/AAAA
    const dia = String(dataEntrega.getDate()).padStart(2, '0');
    const mes = String(dataEntrega.getMonth() + 1).padStart(2, '0'); 
    const ano = dataEntrega.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
// teste
const anoAtual = 2023; // Ano atual
const prazoEntregaDias = 15; // Prazo de entrega em dias
const dataEstimativaEntrega = calcularDataEntrega(anoAtual, prazoEntregaDias);
console.log(`A data estimada de entrega é: ${dataEstimativaEntrega}`); 