document.addEventListener('DOMContentLoaded', () => {
    let startX, startY, endX, endY;

    const threshold = 50; // Distancia mínima para considerar un gesto como "deslizar"

    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;

        handleSwipe();
    });

    function handleSwipe() {
        const diffX = endX - startX;
        const diffY = endY - startY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Horizontal swipe
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
            // Vertical swipe
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