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
