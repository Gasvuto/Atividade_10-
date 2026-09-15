const APARELHOS_POR_COMODO = {
    "Sala": [
        "Smart TV Samsung",
        "Robô aspirador de pó",
        "Ar condicionado Electrolux",
        "Persiana elétrica motorizada",
        "Lâmpada smart inteligente",
        "Interruptor inteligente",
        "Controle remoto inteligente",
        "Poltrona elétrica reclinável"
    ],
    "Cozinha": [
        "Geladeira inteligente",
        "Micro-ondas smart",
        "Cafeteira inteligente",
        "Exaustor inteligente",
        "Fogão smart",
        "Lâmpada smart inteligente",
        "Interruptor inteligente",
        "Tomada inteligente"
    ],
    "Quarto principal": [
        "Ar condicionado smart",
        "Luminária inteligente",
        "Ventilador smart",
        "Cortina elétrica motorizada",
        "Smart TV",
        "Umidificador inteligente",
        "Interruptor inteligente",
        "Tomada inteligente"
    ],
    "Outros comodos": [
        "Ventilador smart",
        "Aquecedor inteligente",
        "Câmera de segurança",
        "Sensor de presença",
        "Fechadura inteligente",
        "Sirene inteligente",
        "Interruptor inteligente",
        "Tomada inteligente"
    ]
};

function gerarDadosAparelho(nomeAparelho) {
    return {
        nome: nomeAparelho,
        periodoDia: {
            labels: ["Manhã", "Tarde", "Noite"],
            data: [
                12,
                57,
                45
            ]
        },
        semanas: {
            labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
            data: [
                12,
                17,
                2,
                10
            ]
        },
        picoUso: {
            labels: ["Manhã", "Tarde", "Noite"],
            data: [
                12,
                23,
                45
            ]
        }
    };
}

const salaSelect = document.getElementById('salaSelect');
const listaAparelhos = document.getElementById('listaAparelhos');
const tituloDados = document.getElementById('tituloDados');


function getComodoInicial() {
    const params = new URLSearchParams(window.location.search);
    const comodo = params.get('comodo');
    if (comodo && APARELHOS_POR_COMODO[comodo]) {
        return comodo;
    }
    return "Sala";
}

function renderizarAparelhos(comodo) {
    listaAparelhos.innerHTML = '';
    const aparelhos = APARELHOS_POR_COMODO[comodo];

    aparelhos.forEach((nome, index) => {
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'aparelho-item';
        botao.textContent = nome;
        botao.addEventListener('click', () => selecionarAparelho(nome, botao));
        listaAparelhos.appendChild(botao);

        if (index === 0) {
            selecionarAparelho(nome, botao);
        }
    });
}

function selecionarAparelho(nome, botaoClicado) {
    document.querySelectorAll('.aparelho-item').forEach(el => el.classList.remove('ativo'));
    if (botaoClicado) botaoClicado.classList.add('ativo');

    aparelhoAtual = gerarDadosAparelho(nome);
    tituloDados.textContent = `Dados de Uso - ${nome}`;

    atualizarGraficos(aparelhoAtual);
}





let graficoPizza, graficoSemanas, graficoPico;
let aparelhoAtual = null;








const CORES = {
    verde: '#5cd65c',
    amarelo: '#e8c93d',
    azul: '#3ec9c9'
};

// let graficoPizza;
function inicializarGraficos() {
    const ctxPizza = document.getElementById('graficoPizza');
    const ctxSemanas = document.getElementById('graficoSemanas');
    const ctxPico = document.getElementById('graficoPico');



    graficoPizza = new Chart(ctxPizza, {
        type: 'pie',
        data: {
            labels: ["Manhã", "Tarde", "Noite"],
            datasets: [{
                data: [
                    42,
                    42,
                    42
                   
                ],
                backgroundColor: [CORES.verde, CORES.amarelo, CORES.azul]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } }
            }
        }
    });

    graficoSemanas = new Chart(ctxSemanas, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'kWh',
                data: [
                    42,12,42

                ],
                backgroundColor: CORES.amarelo
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });

    graficoPico = new Chart(ctxPico, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Horas de uso',
                data: [
                    21,21,21
             
                ],
                backgroundColor: CORES.amarelo
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });
}

function atualizarGraficos(dados) {
    graficoPizza.data.labels = dados.periodoDia.labels;
    graficoPizza.data.datasets[0].data = dados.periodoDia.data;
    graficoPizza.update();

    graficoSemanas.data.labels = dados.semanas.labels;
    graficoSemanas.data.datasets[0].data = dados.semanas.data;
    graficoSemanas.update();

    graficoPico.data.labels = dados.picoUso.labels;
    graficoPico.data.datasets[0].data = dados.picoUso.data;
    graficoPico.update();
}

salaSelect.addEventListener('change', () => {
    renderizarAparelhos(salaSelect.value);
});

document.getElementById('themeToggle').addEventListener('click', () => {
document.body.classList.toggle('dark-theme');
});

$(".bars-icon").on("click", function () {
    $(".menu").fadeToggle(100, "linear");
});

const comodoInicial = getComodoInicial();
salaSelect.value = comodoInicial;
inicializarGraficos();
renderizarAparelhos(comodoInicial);
