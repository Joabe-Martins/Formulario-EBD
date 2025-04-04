// URL do seu Google Apps Script para integração com a planilha
// Substitua o link abaixo pelo link da sua integração (Google Apps Script publicado como Web App)
const scriptURL = "https://script.google.com/macros/s/AKfycbzf43StZ37ZBn15D716GXD57wXQdIW-46_IjPNtXDZyUJAvpXiEJndMZ3r5rnOnuXXI/exec"; // INSIRA AQUI O SEU LINK DE INTEGRAÇÃO

const form = document.getElementById('myForm');

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const submitBtn = document.getElementById("submitBtn");
    const countdownMessage = document.getElementById("countdownMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio imediato

        // Desativa o botão
        submitBtn.disabled = true;
        let timeLeft = 30; // Tempo de bloqueio em segundos

        // Atualiza a mensagem na tela
        countdownMessage.textContent = `Aguarde ${timeLeft} segundos para enviar novamente.`;

        // Inicia o contador regressivo
        let countdown = setInterval(() => {
            timeLeft--;
            countdownMessage.textContent = `Aguarde ${timeLeft} segundos para enviar novamente.`;

            if (timeLeft <= 0) {
                clearInterval(countdown); // Para o contador
                submitBtn.disabled = false; // Reativa o botão
                countdownMessage.textContent = ""; // Limpa a mensagem
            }
        }, 1000);

        // Envia os dados para o Google Sheets
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then(response => {
                window.location.href = "thankyou.html"; // Redireciona após o envio
            })
            .catch(error => console.error("Erro!", error.message));
    });
});
