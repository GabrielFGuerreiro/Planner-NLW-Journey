const atividade = 
{
  nome: "Almoço",
  data: new Date("2024-07-08 10:00"),
  finalizada: true
}

const atividades =
[
  atividade,
  {
    nome: "Academia em grupo",
    data: new Date("2024-07-09 12:00"),
    finalizada: false
  },
  {
    nome: "Gamming Session",
    data: new Date("2024-07-09 16:00"),
    finalizada: true
  },
  
]

const criarItemDaAtividade = (atividade) =>
{
  let input = '<input type="checkbox" !checked>'
  /*Outra forma de se fazer, mas concatenando
  let input = '<input type="checkbox" '*/

  if(atividade.finalizada)
  {
    input = '<input type="checkbox" checked>'
    //input += 'checked'
  }
  //input += '>'*/

  return `
    <div>
      ${input}
      <span>${atividade.nome}</span>
      <time>${atividade.data}</time>
    </div>
    `
}

const section = document.querySelector("section")

for(let atividade of atividades)
{
  section.innerHTML += criarItemDaAtividade(atividade)
}