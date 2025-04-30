document.addEventListener("DOMContentLoaded", () => {
    const mapLink = document.getElementById("direccion-link");
    const mapModal = document.getElementById("map-modal");
    const mapOverlay = document.getElementById("map-overlay");
    const mapModalClose = document.getElementById("map-modal-close");

    if (mapLink && mapModal && mapOverlay && mapModalClose) {
        mapLink.addEventListener("click", (e) => {
            e.preventDefault();
            mapModal.style.display = "block";
            mapOverlay.style.display = "block";
        });

        mapModalClose.addEventListener("click", () => {
            mapModal.style.display = "none";
            mapOverlay.style.display = "none";
        });

        mapOverlay.addEventListener("click", () => {
            mapModal.style.display = "none";
            mapOverlay.style.display = "none";
        });
    }
});