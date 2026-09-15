const formRemover = document.getElementById('formRemover');
const selectComodo = document.getElementById('comodo');
const selectNome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');

// Preenche o select "Nome do dispositivo" com os dispositivos do cômodo escolhido
function atualizarOpcoesNome() {
    const dados = carregarDispositivos(); // vem do dispositivos.js
    const dispositivos = dados[selectComodo.value] || [];

    selectNome.innerHTML = '';
    dispositivos.forEach((dispositivo) => {
        const opcao = document.createElement('option');
        opcao.value = dispositivo.id;
        opcao.textContent = dispositivo.nome;
        selectNome.appendChild(opcao);
    });
}

selectComodo.addEventListener('change', atualizarOpcoesNome);

formRemover.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const comodo = selectComodo.value;
    const id = selectNome.value;
    const nome = selectNome.options[selectNome.selectedIndex]?.textContent;

    if (!id) return; // cômodo sem nenhum dispositivo cadastrado

    removerDispositivo(comodo, id); // vem do dispositivos.js
    mensagem.textContent = `"${nome}" foi removido de ${comodo}.`;
    atualizarOpcoesNome();
});

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

$(".bars-icon").on("click", function () {
    $(".menu").fadeToggle(100, "linear");
});

atualizarOpcoesNome();
