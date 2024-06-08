document.addEventListener('DOMContentLoaded', () => {
    const pictures = document.querySelectorAll('.picture');
    let currentIndex = 0;

    const showPicture = (index) => {
        pictures.forEach((picture, i) => {
            picture.style.display = i === index ? 'block' : 'none';
        });
    };

    pictures.forEach((picture, index) => {
        picture.addEventListener('click', () => {
            clearInterval(timer);
            currentIndex = (index + 1) % pictures.length;
            showPicture(currentIndex);
            timer = setInterval(nextPicture, 5000);
        });
    });

    const nextPicture = () => {
        currentIndex = (currentIndex + 1) % pictures.length;
        showPicture(currentIndex);
    };

    let timer = setInterval(nextPicture, 5000);
    showPicture(currentIndex);
});
