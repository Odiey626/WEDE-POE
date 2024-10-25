document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    setTimeout(() => {
        container.classList.add('show');
    }, 100); // Delay to make the effect noticeable
});
