document.addEventListener("DOMContentLoaded", () => {
         const form = document.getElementById("mensagemForm");
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // impede envio imediato
            confetti({
                particleCount: 700,
                spread: 110,
                origin: { y: 0.6 }
            });

            // redireciona após 3,5 segundo
            setTimeout(() => {
                window.location.href = "agradecimento.html";
            }, 3500);
        });
    });