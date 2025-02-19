document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    // Previne o envio do formulário 
    event.preventDefault();
  
    // Obtém o valor do input de email
    var email = document.getElementById('emailInput').value;
  
    // Verifica se o email contém "@" e ".com"
    if (email.includes('@') && email.includes('.com')) {
      
      alert('Email válido! Formulário será enviado.');
      
    } else {
      // Se o email for inválido, exibe uma mensagem de erro
      alert('Por favor, insira um email válido contendo "@" e ".com".');
    }
  });
  
