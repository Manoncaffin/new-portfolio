document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('imageContainer');
    const scrollSpeedMouse = 60;
    let isTouchpad = false;

    container.addEventListener('wheel', (event) => {
        const { deltaX, deltaY, deltaMode } = event;

        // Détection (simplifiée mais plus fiable)
        if (Math.abs(deltaY) < 15 && Math.abs(deltaX) < 15) {
            isTouchpad = true;
        } else {
            isTouchpad = false;
        }

        const scrollAmount = isTouchpad ? deltaY * 1.5 : deltaY * scrollSpeedMouse;

        event.preventDefault();
        container.scrollBy({
            left: scrollAmount,
            behavior: isTouchpad ? 'auto' : 'smooth'
        });
    });
});
