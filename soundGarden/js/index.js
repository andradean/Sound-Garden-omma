function acao(){
    let modal = document.querySelector('.modal');

    modal.style.display = 'block';
}

function fecharModal(){
    let modal = document.querySelector('.modal');

    modal.style.display = 'none';
    
}


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