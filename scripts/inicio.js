document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("banner-audio");
    if (audio) {
        audio.play().catch(error => {
            console.error("Error al reproducir el audio:", error);
        });
    }

    const video = document.getElementById("background-video");
    const image = document.getElementById("background-image");

    // Asegurarse de que las clases coincidan con las del HTML
    const backgroundImage = document.querySelector('.background-image'); // Verifica que esta clase exista en el HTML
    if (backgroundImage && video) {
        const transitionEffect = prompt("Ingrese el efecto de transición (por ejemplo, 'opacity 1s ease'):", "opacity 5s ease");
        backgroundImage.style.transition = transitionEffect; // Aplica el efecto de transición

        let imageShown = false; // Bandera para evitar múltiples activaciones
        video.addEventListener("timeupdate", () => {
            if (video.readyState >= 3 && video.duration - video.currentTime <= 4 && !imageShown) { // Ajustado a 4 segundos
                imageShown = true; // Marca que la imagen ya se mostró
                backgroundImage.classList.add('show'); // Aplica la clase para mostrar la imagen con transición
                backgroundImage.style.position = "absolute"; // Asegura que se sobreponga sobre el video
                backgroundImage.style.top = "0";
                backgroundImage.style.left = "0";
                backgroundImage.style.width = "100%";
                backgroundImage.style.height = "100%";
                backgroundImage.style.zIndex = "2"; // Asegura que esté encima del video
                video.style.zIndex = "1"; // Asegura que el video esté detrás
            }
        });
    }

    if (video) {
        video.addEventListener("ended", () => {
            video.style.display = "none"; // Oculta el video
            if (image) {
                image.style.display = "block"; // Muestra la imagen
            }
        });
    }

    // Referencias a los elementos del iframe
    const iframeOverlay = document.getElementById('iframeOverlay'); // Verifica que este ID exista en el HTML
    const openIframeButton = document.getElementById('openIframe'); // Verifica que este ID exista en el HTML
    const closeIframeButton = document.getElementById('closeIframe'); // Verifica que este ID exista en el HTML

    // Abrir el iframe
    if (openIframeButton && iframeOverlay) {
        openIframeButton.addEventListener('click', () => {
            iframeOverlay.classList.add('active'); // Verifica que la clase 'active' esté definida en el CSS
        });
    }

    // Cerrar el iframe
    if (closeIframeButton && iframeOverlay) {
        closeIframeButton.addEventListener('click', () => {
            iframeOverlay.classList.remove('active'); // Verifica que la clase 'active' esté definida en el CSS
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("banner-audio");
    let muteButton = document.getElementById("mute-button");

    // Crear el botón de mute si no existe
    if (!muteButton) {
        const audioControl = document.createElement("div");
        audioControl.id = "audio-control";

        muteButton = document.createElement("button");
        muteButton.id = "mute-button";
        muteButton.textContent = "🔊"; // Estado inicial

        audioControl.appendChild(muteButton);
        document.body.appendChild(audioControl); // Agregar al cuerpo del documento
    }

    if (audio && muteButton) {
        muteButton.textContent = audio.muted ? "🔇" : "🔊";

        muteButton.addEventListener("click", () => {
            audio.muted = !audio.muted;
            muteButton.textContent = audio.muted ? "🔇" : "🔊";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("banner-audio");

    // Verificar si es la primera visita usando localStorage
    if (!localStorage.getItem("audioPlayed")) {
        // Reproducir el audio
        audio.play().catch((error) => {
            console.log("El navegador bloqueó la reproducción automática:", error);
        });

        // Marcar que el audio ya se reprodujo
        localStorage.setItem("audioPlayed", "true");
    }
});






