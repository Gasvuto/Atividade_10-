let data = new Date();
let minutos = data.getMinutes();
let horas = data.getHours();
let month = data.getMonth()

let dia = data.getDate()
let nome = prompt("Digite seu nome:") || 'Usuário';
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
setInterval(() => {
        console.clear();
        const fusohorario = data.getTimezoneOffset() / 60;
        data = new Date();
        minutos = data.getMinutes();
        horas = data.getHours();
        let bem_vindo = document.getElementById('msg_benvindo');
        bem_vindo.textContent = `Bem-vindo(a), ${nome}! Hoje é ${diasDaSemana[data.getDay()]} ${data.toLocaleDateString()} e são ${horas}:${minutos}. O fuso horário atual é ${fusohorario}.`;
    },1*1000);
    


const campoBusca = document.getElementById('campoBusca');
const tabelaAcessos = document.querySelectorAll('#tabelaAcessos tbody tr');
campoBusca.addEventListener('input', function() {
    const termoBusca = campoBusca.value.toLowerCase();
    tabelaAcessos.forEach(function(linha) {{
        const testoLinha = linha.textContent.toLowerCase();
        if (testoLinha.includes(termoBusca)) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    }
    });
})

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});


$(".bars-icon").on("click", function() {
    $(".menu").fadeToggle(100, "linear");
});