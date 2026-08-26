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

        console.log(`Bem-vindo(a), ${nome}! Hoje é ${diasDaSemana[data.getDay()]} ${data.toLocaleDateString()} e são ${horas}:${minutos}. O fuso horário atual é ${fusohorario}.`);
    },1*1000);
    

document.getElementById("msg_benvindo").innerHTML = `Bem-vindo(a), ${nome}! Hoje é ${diasDaSemana[data.getDay()]} ${data.toLocaleDateString()} e são ${horas}:${minutos}. O fuso horário atual é ${fusohorario}.`;
