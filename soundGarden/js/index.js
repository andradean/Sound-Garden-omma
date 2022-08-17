
//js do banner-slide/carrossel

const imagens = document.getElementById("imagens");
const imagem = document.querySelectorAll("#imagens imagens");


let idX = 0;

function carrossel(){
    idX++;

    if(idX > imagem.lenght - 1){
        idX = 0;
    }

    imagens.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 2000);






// js modal

function acao(){
    let modal = document.querySelector('.modal');

    modal.style.display = 'block';
}

function fecharModal(){
    let modal = document.querySelector('.modal');

    modal.style.display = 'none';
    
}



// cards eventos

const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const listarEventosIndex = async () => {

    const eventos = await fetch(SOUND_URL, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((resposta) => {

        //retorna lista em array de objetos
        return resposta.json();
    });

    // console.log(eventos);

    const containerCards = document.querySelector('#index-eventos');

    let htmlEventos = "";
    const tresEventos = eventos.slice(0,3);

    tresEventos.forEach(evento => {
        htmlEventos += `
        <article class="evento card p-5 m-3">
        <h2>${evento.name} ${evento.scheduled}</h2>
        <h4>${evento.atractions}</h4>
        <p>${evento.description}</p>
        <a onclick="acao()"  href="#" class="btn btn-primary">reservar ingresso</a>
    </article>
        `;
    });

    containerCards.innerHTML = htmlEventos;


}

listarEventosIndex();