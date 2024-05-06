document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.Add');
    button.addEventListener('click', function() {
        const email = document.querySelector('.inputemail').value;
        const senha = document.querySelector('.inputsenha').value;
        
        if (email === "admin@admin.com" && senha === "admin") {
            window.location.href = "index.html";
        } else {
            alert("Credenciais inválidas. Por favor, tente novamente.");
        }
    });
});