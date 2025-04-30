let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => next.click(), 500000);

function showSlider(){
    // Optimizar la selección de elementos activos
    document.querySelector('.slider .list .item.active').classList.remove('active');
    document.querySelector('.thumbnail .item.active').classList.remove('active');

    // Activar nuevos elementos
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // Reiniciar el intervalo del slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => next.click(), 500000);
}

function setPositionThumbnail () {
    const thumbnailActive = document.querySelector('.thumbnail .item.active');
    thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
}

// Ajustar tamaño de miniaturas de forma más eficiente
thumbnails.forEach(thumbnail => {
    Object.assign(thumbnail.style, {
        width: '150px',
        height: '150px'
    });
});

// Manejar clics en miniaturas de forma más eficiente
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('mouseleave', () => iframe.src = iframe.src);
});

// Referencias al modal y su contenido
const modal = document.getElementById('modal');
const modalIframeContainer = document.getElementById('modal-iframe-container');
const closeModalButton = document.getElementById('close-modal');

// Función para abrir el modal con un iframe específico
function openModal(iframeId) {
    const iframeContainer = document.getElementById(iframeId);
    if (iframeContainer) {
        const iframe = iframeContainer.querySelector('iframe');
        if (iframe) {
            modalIframeContainer.innerHTML = ''; // Limpiar contenido previo
            const clonedIframe = iframe.cloneNode(true); // Clonar el iframe con sus hijos
            clonedIframe.style.width = '100%'; // Asegurar que ocupe el 100% del contenedor
            clonedIframe.style.height = '100%'; // Asegurar que ocupe el 100% del contenedor

            // Agregar atributo para reproducción automática
            const srcWithAutoplay = clonedIframe.src.includes('?') 
                ? `${clonedIframe.src}&autoplay=1` 
                : `${clonedIframe.src}?autoplay=1`;
            clonedIframe.src = srcWithAutoplay;

            modalIframeContainer.appendChild(clonedIframe); // Agregar al modal
            modal.style.display = 'flex'; // Mostrar el modal
        }
    }
}

// Programar todos los botones con la clase "trailer-play" para abrir el modal con tráilers
document.querySelectorAll('.trailer-play').forEach(button => {
    button.addEventListener('click', () => {
        const iframeId = button.getAttribute('data-iframe-id');
        openModal(iframeId);
    });
});

// Programar todos los botones con la clase "pelicula-play" para abrir el modal con películas
document.querySelectorAll('.pelicula-play').forEach(button => {
    button.addEventListener('click', () => {
        const iframeId = button.getAttribute('data-iframe-id');
        openModal(iframeId);
    });
});

// Cerrar el modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalIframeContainer.innerHTML = ''; // Limpiar contenido del modal
});

// Cerrar el modal al hacer clic fuera del contenido
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalIframeContainer.innerHTML = ''; // Limpiar contenido del modal
    }
});

// Optimizar visibilidad de miniaturas en función del tamaño de la ventana
window.addEventListener('resize', () => {
    const thumbnail = document.querySelector('.thumbnail');
    thumbnail.style.display = window.innerWidth <= 480 ? 'none' : 'flex';
});

// Asegurar visibilidad inicial de las miniaturas
const thumbnail = document.querySelector('.thumbnail');
Object.assign(thumbnail.style, {
    display: 'flex',
    visibility: 'visible',
    opacity: '1'
});












