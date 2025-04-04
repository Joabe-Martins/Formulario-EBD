// URL do seu Google Apps Script para integração com a planilha
// Substitua o link abaixo pelo link da sua integração (Google Apps Script publicado como Web App)
const scriptURL = "https://script.google.com/macros/s/AKfycbzf43StZ37ZBn15D716GXD57wXQdIW-46_IjPNtXDZyUJAvpXiEJndMZ3r5rnOnuXXI/exec"; // INSIRA AQUI O SEU LINK DE INTEGRAÇÃO

const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o comportamento padrão do formulário

  // Envia os dados do formulário via fetch utilizando o método POST
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // Após o envio bem-sucedido, redireciona para a página de agradecimento
      window.location.href = 'thankyou.html';
    })
    .catch(error => console.error('Erro!', error.message));
});
