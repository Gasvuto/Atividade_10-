
const CHAVE_STORAGE = "smartcontrol_dispositivos";


const DISPOSITIVOS_PADRAO = {
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


function gerarId() {
    if (window.crypto && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return Date.now() + "-" + Math.random().toString(16).slice(2);
}


function criarEstruturaInicial() {
    const estrutura = {};
    Object.keys(DISPOSITIVOS_PADRAO).forEach(comodo => {
        estrutura[comodo] = DISPOSITIVOS_PADRAO[comodo].map(nome => ({
            id: gerarId(),
            nome: nome
        }));
    });
    return estrutura;
}


function carregarDispositivos() {
    const salvo = localStorage.getItem(CHAVE_STORAGE);

    if (salvo) {
        return JSON.parse(salvo); 
    }

    const inicial = criarEstruturaInicial();
    salvarDispositivos(inicial);
    return inicial;
}


function salvarDispositivos(dados) {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(dados));
}

function adicionarDispositivo(comodo, nome) {
    const dados = carregarDispositivos();

    if (!dados[comodo]) {
        dados[comodo] = [];
    }

    dados[comodo].push({ id: gerarId(), nome: nome });
    salvarDispositivos(dados);
}

function removerDispositivo(comodo, id) {
    const dados = carregarDispositivos();

    if (!dados[comodo]) return;

    dados[comodo] = dados[comodo].filter(dispositivo => dispositivo.id !== id);
    salvarDispositivos(dados);
}
