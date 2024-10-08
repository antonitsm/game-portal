function countdown() {
    const countdownDate = new Date("Oct 15, 2024 00:00:00").getTime();
    const interval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("item010-days").innerText = days;
        document.getElementById("item010-hours").innerText = hours;
        document.getElementById("item010-minutes").innerText = minutes;
        document.getElementById("item010-seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.querySelector(".item010-countdown-section h3").innerText = "Lançado!";
            document.querySelector(".item010-countdown").style.display = "none";
        }
    }, 1000);
}

countdown();