/*document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption"); // Captura el elemento figcaption
    const closeModal = document.querySelector(".modal-close");
    const prevButton = document.querySelector(".modal-arrow.left");
    const nextButton = document.querySelector(".modal-arrow.right");
    const images = document.querySelectorAll(".carousel-images img");
    const captions = document.querySelectorAll(".carousel-images figcaption"); // Captura los textos
    let currentIndex = 0;

    if (!modal || !modalImage || !modalCaption || !closeModal || !prevButton || !nextButton || images.length === 0) {
        console.error("Error: No se encontraron los elementos necesarios para el modal.");
        return;
    }

    // Abrir modal al hacer clic en una imagen
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            modal.classList.add("active");
            modalImage.src = img.src;
            modalCaption.textContent = captions[index].textContent; // Actualiza el texto del figcaption
            currentIndex = index;
        });
    });

    // Cerrar modal
    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Navegar a la imagen anterior
    prevButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el clic cierre el modal
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentIndex].src;
        modalCaption.textContent = captions[currentIndex].textContent; // Actualiza el texto
    });

    // Navegar a la siguiente imagen
    nextButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el clic cierre el modal
        currentIndex = (currentIndex + 1) % images.length;
        modalImage.src = images[currentIndex].src;
        modalCaption.textContent = captions[currentIndex].textContent; // Actualiza el texto
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});*/

function toggleExtraText() {
    const contenido = document.getElementById('extra-text');
    const button = document.querySelector('.cta-button');
    if (contenido.style.display === 'none' || contenido.style.display === '') {
        contenido.style.display = 'block';
        button.textContent = 'Ocultar';
    } else {
        contenido.style.display = 'none';
        button.textContent = 'Saber más de nosotros'; // Cambia el texto del botón al cerrar
    }
}

/*
document.addEventListener("DOMContentLoaded", () => {
    const extraText = document.getElementById('extra-text');
    if (extraText) {
        extraText.addEventListener("mouseleave", () => {
            if (extraText.style.display === 'block') {
                extraText.style.display = 'none';
            }
        });
    }
});*/

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    // Asegúrate de que no se añadan márgenes dinámicamente
    main.style.marginBottom = "0";
    footer.style.marginTop = "0";

    // Verifica si el espacio persiste debido a otros estilos
    console.log("Main margin-bottom:", getComputedStyle(main).marginBottom);
    console.log("Footer margin-top:", getComputedStyle(footer).marginTop);

    // Evitar que las imágenes puedan ser copiadas
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.addEventListener("contextmenu", (e) => {
            e.preventDefault(); // Desactiva el menú contextual
        });
        img.addEventListener("dragstart", (e) => {
            e.preventDefault(); // Desactiva el arrastre de imágenes
        });
    });
});









