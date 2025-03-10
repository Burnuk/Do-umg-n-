// script.js
document.getElementById("gift-box").addEventListener("click", function() {
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerHTML = "İyi ki Doğdun Annecim!";
    
    // Konfeti efekti ekleme
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        confetti.style.left = x + "px";
        confetti.style.top = y + "px";

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
});
