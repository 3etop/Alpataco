document.addEventListener('DOMContentLoaded', () => {
    let startX = 0, startY = 0, endX = 0, endY = 0;

    const threshold = 50; // Distancia mínima para considerar un gesto como "deslizar"

    document.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) { // Asegúrate de que solo hay un toque
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
    });

    document.addEventListener('touchend', (e) => {
        if (e.changedTouches.length === 1) { // Asegúrate de que solo hay un toque
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;

            handleSwipe();
        }
    });

    function handleSwipe() {
        const diffX = endX - startX;
        const diffY = endY - startY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Deslizar horizontal
            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    console.log('Deslizar hacia la derecha');
                    // Acción para deslizar hacia la derecha
                } else {
                    console.log('Deslizar hacia la izquierda');
                    // Acción para deslizar hacia la izquierda
                }
            }
        } else {
            // Deslizar vertical
            if (Math.abs(diffY) > threshold) {
                if (diffY > 0) {
                    console.log('Deslizar hacia abajo');
                    // Acción para deslizar hacia abajo
                } else {
                    console.log('Deslizar hacia arriba');
                    // Acción para deslizar hacia arriba
                }
            }
        }
    }
});