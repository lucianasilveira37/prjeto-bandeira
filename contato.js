document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os valores do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Aqui você pode adicionar lógica para enviar os dados ao servidor

    // Exibir uma mensagem de sucesso
    document.getElementById("responseMessage").innerText = "Mensagem enviada com sucesso! Obrigado, " + name + ".";
    
    // Limpar o formulário
    document.getElementById("contactForm").reset();
});
