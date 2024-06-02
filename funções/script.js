document.addEventListener('DOMContentLoaded', () => {
    const chk = document.getElementById('chk');
    const logo = document.querySelector('header > img');
    const agora = new Date();
    const hora = agora.getHours();

    // Define o estado inicial do checkbox e aplica/remover o tema escuro com base na hora
    if (hora >= 6 && hora < 18) {
        chk.checked = false;
        document.body.classList.remove('dark');
        logo.src = 'imagens/logo-pequena-original.jpg';
    } else {
        chk.checked = true;
        document.body.classList.add('dark');
        logo.src = 'imagens/logo-pequena-dark.jpg';
    }

    // Adiciona o evento para alternar o tema quando o checkbox é clicado
    chk.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            logo.src = 'imagens/logo-pequena-dark.jpg';
        } else {
            logo.src = 'imagens/logo-pequena-original.jpg';
        }
    });
});

// Primeira apresentação de slides
let contagem = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    proximaImagem();
}, 6000);

function proximaImagem() {
    contagem++;
    if (contagem > 4) {
        contagem = 1;
    }
    document.getElementById("radio" + contagem).checked = true;
}


// ler mais

document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreContent = document.getElementById('more-content');

    readMoreBtn.addEventListener('click', () => {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            readMoreBtn.textContent = 'Ler Menos';
        } else {
            moreContent.style.display = 'none';
            readMoreBtn.textContent = 'Ler Mais';
        }
    });
});

function clickMenu() {
    const menu = document.getElementById("partes");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
    } else {
        menu.style.display = "none";
    }
}