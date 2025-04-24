document.addEventListener("DOMContentLoaded", () => {
    const videoWrappers = document.querySelectorAll(".video-wrapper");

    videoWrappers.forEach(wrapper => {
        const iframe = wrapper.querySelector(".iframe-video");

        wrapper.addEventListener("click", (event) => {
            if (!wrapper.classList.contains("expanded")) {
                event.stopPropagation(); // Evita que el clic en el contenedor cierre el video
                wrapper.classList.add("expanded");

                // Agrega un botón para cerrar
                const closeButton = document.createElement("span");
                closeButton.textContent = "×";
                closeButton.classList.add("close-video");
                wrapper.appendChild(closeButton);

                closeButton.addEventListener("click", (event) => {
                    event.stopPropagation(); // Evita que el clic cierre el video inmediatamente
                    wrapper.classList.remove("expanded");
                    closeButton.remove();
                });
            }
        });

        // Cierra el video al hacer clic fuera del contenedor
        document.addEventListener("click", (event) => {
            if (wrapper.classList.contains("expanded") && !wrapper.contains(event.target)) {
                wrapper.classList.remove("expanded");
                const closeButton = wrapper.querySelector(".close-video");
                if (closeButton) closeButton.remove();
            }
        });
    });
});






