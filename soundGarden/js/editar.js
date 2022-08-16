const API_URL = "https://xp41-soundgarden-api.herokuapp.com";
const inputNome = document.querySelector("#nome");
const inpuntEvento = document.querySelector("#eventos");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const form = document.querySelector("form");
const id = document.querySelector("#id");

const retorno = async () => {
  const puxar = {
    method: "get",
    headers: { "Content-type": "application/json" },
  };

  const receber = await fetch(`${API_URL}/events${id}`, puxar);

  recebidos = await receber.json();
  inputNome.value = receber.name;
  inputBanner.value = receber.poster;
  inputAtracoes.value = receber.attractions;
  inputDescricao.value = receber.description;
  inputData.value = receber.scheduled.slice(0, 16);
  inputLotacao.value = receber.number_tickets;

  retorno();

  form.onsubmit = async (evento) => {
    evento.preventDefault();

    const atualizarEvento = {
      name: inputNome.value,
      poster: inputBanner.value,
      attractions: inputAtracoes.value.split(","),
      description: inputDescricao.value,
      scheduled: inputData.value,
      number_tickets: inputLotacao,
    };

    const enviar = {
      method: "put",
      headers: { "Content-type": "application/json" },
      redirect: "follow",
    };
    const receber = await fetch(`${API_URL}/events${id}`, puxar);
    if (receber != 201) {
      alert("houston, we have a problem");
    }
  };
};
