const sections = document.querySelectorAll("section");
const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.body.className = entry.target.id;
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});