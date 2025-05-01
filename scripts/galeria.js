document.addEventListener('DOMContentLoaded', () => {
    // Modal del Director
    const directorModal = document.getElementById('modalDirector');
    const openDirectorButton = document.getElementById('openDirectorModal');
    const closeDirectorButton = directorModal?.querySelector('.close-button');

    if (directorModal) {
        directorModal.style.display = 'none';
    }

    openDirectorButton?.addEventListener('click', () => {
        if (directorModal) {
            directorModal.style.display = 'block';
        }
    });

    closeDirectorButton?.addEventListener('click', () => {
        if (directorModal) {
            directorModal.style.display = 'none';
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === directorModal) {
            directorModal.style.display = 'none';
        }
    });

    // Modal de la Galería
    const galleryImages = document.querySelectorAll('.galeria-imagenes .imagen img');
    const titles = document.querySelectorAll('.galeria-imagenes .imagen h3');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalText = document.getElementById('modalText');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const closeGalleryButton = imageModal?.querySelector('.close-button');

    let currentImageIndex = 0;

    if (imageModal) {
        imageModal.style.display = 'none';
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            modalImage.src = img.src;
            modalText.textContent = titles[index]?.textContent || '';
            imageModal.style.display = 'flex';
        });
    });

    closeGalleryButton?.addEventListener('click', () => {
        if (imageModal) {
            imageModal.style.display = 'none';
        }
    });

    prevButton?.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImage.src = galleryImages[currentImageIndex].src;
        modalText.textContent = titles[currentImageIndex]?.textContent || '';
    });

    nextButton?.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        modalImage.src = galleryImages[currentImageIndex].src;
        modalText.textContent = titles[currentImageIndex]?.textContent || '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });

    document.querySelectorAll('.video').forEach(video => {
        video.addEventListener('mouseleave', () => {
            const iframe = video.querySelector('iframe');
            if (iframe) {
                const src = iframe.src;
                iframe.src = ''; // Limpia el src para reiniciar el video
                iframe.src = src; // Restaura el src original
            }
        });
    });
});



