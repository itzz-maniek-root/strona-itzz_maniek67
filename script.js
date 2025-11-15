// ----- ANIMOWANE STATYSTYKI -----

const counters = document.querySelectorAll(".stat-number");

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const speed = 50;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };
    updateCount();
});
