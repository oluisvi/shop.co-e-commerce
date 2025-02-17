/*Script da verificação do envio de email*/ 

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Obtém o valor do input de email
    var email = document.getElementById('emailInput').value;

    // Verifica se o email contém "@" e ".com"
    if (email.includes('@') && email.includes('.com')) {
      // Se o email for válido, permite o envio do formulário
      alert('Email válido! Formulário será enviado.');
      this.submit();
    } else {
      // Se o email for inválido, exibe uma mensagem de erro
      alert('Por favor, insira um email válido contendo "@" e ".com".');
    }
  });


/*Script da verificação de envio do email*/ 
