
const reviews = document.querySelectorAll('.item005-review');
const nextButton = document.querySelector('.item005-next');
const prevButton = document.querySelector('.item005-prev');
let currentIndex = 0;

function showReview(index) {
    reviews.forEach((review, i) => {
        review.style.display = i === index ? 'block' : 'none';
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
});

showReview(currentIndex);