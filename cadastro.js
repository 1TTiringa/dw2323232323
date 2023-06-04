// Obter os valores dos parâmetros da URL
function obterParametrosURL() {
    var urlParams = new URLSearchParams(window.location.search);
    var params = {};
  
    for (var param of urlParams) {
      params[param[0]] = param[1];
    }
  
    return params;
}
  
  // Exibir as informações do formulário na página de destino
function exibirInformacoesFormulario() {
    var parametros = obterParametrosURL();
  
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML =
      "<p>Nome Completo:" + parametros.nomeCompleto + "</p>" +
      "<p>E-mail:" + parametros.email + "</p>" +
      "<p>Nome de usuário do SIAPE:" + parametros.usuarioSIAPE + "</p>" +
      "<p>Carga Horária:" + parametros.cargaHoraria + "</p>" +
      "<p>Atividades:" + parametros.atividades + "</p>";
}
  
// Chamar a função para exibir as informações assim que a página for carregada
window.addEventListener("DOMContentLoaded", exibirInformacoesFormulario);

function salvarTarefa() {
    var tarefa = document.getElementById("tarefa").value;
    var diaSemana = document.getElementById("diaSemana").value;
    var horario = document.getElementById("horario").value;

    var cardInfo = {
      tarefa: tarefa,
      diaSemana: diaSemana,
      horario: horario
    };

    console.log(cardInfo);
}
