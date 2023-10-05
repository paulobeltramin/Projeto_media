
const form = document.getElementById("form");
const imgAprovado = '<img src="/images/aprovado.png" alt="emoji-aprovado"/>';
const imgReprovado = '<img src="/images/reprovado.png" alt="emoji-reprovado"/>';
let linhas = '';
nomeAtividade = [];
notaAtividade = [];


const aprovado = '<span class ="aprovado">aprovado</span>'
const reprovado = '<span class ="reprovado">reprovado</span>'



// evento formulario
form.addEventListener("submit", function (e) {
   e.preventDefault();
   inserirLinhas();
   calcularMedia();

});

// funções
function inserirLinhas() {

   const atividade = document.getElementById("atividade").value
   const nota = parseFloat(document.getElementById("nota").value);
   const tbody = document.getElementById("tbody");


   nomeAtividade.push(atividade);
   notaAtividade.push(nota)


   let linha = "<tr>";
   linha += `<td>${atividade}</td>`;
   linha += `<td>${nota}</td>`;
   linha += `<td>${nota >= 7 ? imgAprovado : imgReprovado}</td>`;

   if (tbody) {
      document.getElementById("mediaText").innerHTML = "media final"
   } else {
      document.getElementById("mediaText").innerHTML = ""
   }


   linhas = linha;

   tbody.innerHTML += linha

};

// calculando as notas 
function calcularMedia() {
   let notaMedia = 0
   for (let i = 0; i < notaAtividade.length; i++) {
      notaMedia += notaAtividade[i]
   }

   let mediaFinal = notaMedia / notaAtividade.length

   const notaFinal = document.getElementById("resultado");
   const situacao = document.getElementById("apro-repr");
   notaFinal.innerHTML = mediaFinal.toFixed(1)



   if (mediaFinal >= 7) {
      situacao.innerHTML = aprovado
   } else {
      situacao.innerHTML = reprovado
   }

};







