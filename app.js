document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const container = document.querySelector('.testimonial-container');
    const cards = document.querySelectorAll('.testimonial-card');
    const cardCount = cards.length;
    let currentIndex = 0;

    function updateSlide() {
        const offset = -currentIndex * 100;
        container.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cardCount - 1;
        }
        updateSlide();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < cardCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlide();
    });

    // Optional: Auto-slide functionality
    // setInterval(() => {
    //     nextButton.click();
    // }, 5000); // Change slide every 5 seconds
});
