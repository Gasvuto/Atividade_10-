const formCadastro = document.getElementById('formCadastro');
const mensagem = document.getElementById('mensagem');

formCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault(); // impede a página de recarregar, já que não temos backend

    const nome = document.getElementById('nome').value.trim();
    const comodo = document.getElementById('comodo').value;

    adicionarDispositivo(comodo, nome); // vem do dispositivos.js

    mensagem.textContent = `"${nome}" foi cadastrado em ${comodo}.`;
    formCadastro.reset();
});

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

$(".bars-icon").on("click", function () {
    $(".menu").fadeToggle(100, "linear");
});
