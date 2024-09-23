// Görsel URL'lerini tanımla
const images = [
    'images/future-1.jpg',
    'images/future-2.jpg',
    'images/future-3.jpeg',
    'images/future-4.jpg',
    'images/future-5.jpg'
];

// Başlangıçta dizinin ilk görseli
let currentIndex = 0;
const carouselImage = document.getElementById('image');
carouselImage.src = images[currentIndex];

// Önceki butonuna tıklanıldığında
document.getElementById('prev').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    carouselImage.src = images[currentIndex];
});

// Sonraki butonuna tıklanıldığında
document.getElementById('next').addEventListener('click', function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    carouselImage.src = images[currentIndex];
});
