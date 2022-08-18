const API_URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const inputNome = document.querySelector("#nome");
const evento = document.querySelector("#eventos");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const form = document.querySelector("form");

const findID = () => {
  // pega url da página
  const url = new URL(window.location.href);
  //separando parametro id
  const id = url.searchParams.get("id");
  // retorna somente o id
  return id;
};

const eventos = async () => {
  const pegar = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const retorno = await fetch(API_URL + "/" + findID(), pegar);

  const conteudoEvento = await retorno.json();

  inputNome.value = conteudoEvento.name;
  inputBanner.value = conteudoEvento.poster;
  inputAtracoes.value = conteudoEvento.attractions;
  inputDescricao.value = conteudoEvento.description;
  inputData.value = conteudoEvento.scheduled;
  inputLotacao.value = conteudoEvento.number_tickets;
};

eventos();

form.onsubmit = async (evento) => {
  evento.preventDefault();

  const excluir = {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const resposta = await fetch(API_URL + "/" + findID(), excluir);
  if (resposta.status == 204) {
    alert("Evento excluido com sucesso!!!");
    window.location.href = "admin.html";
  }
};
