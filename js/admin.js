const API_URL = "https://xp41-soundgarden-api.herokuapp.com";
const tabela = document.querySelector("table");

const eventos = async () => {
  const receber = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  };
  const solitacao = await fetch(`${API_URL}/events`, receber);
  const resposta = await solitacao.json();
  let novaTabela = "";
  for (let i = 0; i < resposta.length; i++) {
    novaTabela += `<tr>
    <th scope='row'>${i} </th>
    <td>${resposta[i].scheduled}</td>
    <td>${resposta[i].name}</td>
    <td>${resposta[i].attractions}</td>
    <td>
        <a href="reservas.html?${resposta[i]._id}" class="btn btn-dark">ver reservas</a>
        <a href="editar.html?${resposta[i]._id}" class="btn btn-secondary">editar</a>
        <a href="editar.html?${resposta[i]._id}" class="btn btn-danger">excluir</a>
    </td>
</tr> `;
  }
  tabela.innerHTML = novaTabela;
};
eventos();
