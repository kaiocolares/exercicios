//Declaração de variáveis
const form = document.getElementById('formulario');
let linhas = '';
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji festejando">';
const media = prompt('Digite o valor da media para passar');
let somanota = 0;
let contador = 0;
let todasNotas = [];
let todasAtividades = [];
let mediafinal = 0;

form.addEventListener('submit', function(e){
    e.preventDefault();

    //Recebendo e armazenando os valores
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    //Verificando se já existe atividade com o nome digitado
    if(todasAtividades.includes(nomeAtividade.value)){
        alert('Essa atividade ja foi adicionada');
        nomeAtividade.value = '';
    } else{

        //Colocando os valores adicionados nas arrays
        todasNotas.push(parseFloat(notaAtividade.value));
        todasAtividades.push(nomeAtividade.value);

        //Atualizando as linhas com os valores recebidos
        const tbody = document.getElementById('tabela-corpo');
        let linha = '<tr>';
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${parseFloat(notaAtividade.value) >= media ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        linhas += linha;
        tbody.innerHTML = linhas;

        //Calculando média final
        somanota = todasNotas.reduce((a,b)=>a+b,0);
        contador += 1;
        mediafinal = (somanota/contador).toFixed(2);

        //Atualizando resultado final
        const tfoot = document.getElementById('tabela-resultado');
        let linhaResultado = '<tr>';
        linhaResultado += `<td>Média final</td>`;
        linhaResultado += `<td>${mediafinal}</td>`;
        linhaResultado += `<td>${mediafinal >= media ? imgAprovado : imgReprovado}</td>`;
        linhaResultado += '</tr>';
        tfoot.innerHTML = linhaResultado;

        //Zerando os inputs para novo preenchimento
        nomeAtividade.value = '';
        notaAtividade.value = '';
}});