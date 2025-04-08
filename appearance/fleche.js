const imageContainer = document.getElementById('imageContainer');
    
        // Création du curseur flèche
        const cursor = document.createElement('div');
        cursor.id = 'customCursor';
        document.body.appendChild(cursor);
    
        // Applique le style
        const cursorStyle = document.createElement('style');
        cursorStyle.innerHTML = `
            #customCursor {
                position: fixed;
                width: 60px;
                height: 60px;
                pointer-events: none;
                background-size: contain;
                background-repeat: no-repeat;
                z-index: 10000;
                display: none;
            }
        `;
        document.head.appendChild(cursorStyle);
    
        // Mise à jour de la position et direction
        imageContainer.addEventListener('mousemove', (e) => {
            const rect = imageContainer.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;
    
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
            cursor.style.display = 'block';
    
            // Si curseur dans la moitié gauche → flèche gauche
            if (x < rect.left + rect.width / 2) {
                cursor.style.backgroundImage = "url('/images/flechegauche.svg')";
                cursor.dataset.direction = 'left';
            } else {
                cursor.style.backgroundImage = "url('/images/flechedroite.svg')";
                cursor.dataset.direction = 'right';
            }
        });
    
        imageContainer.addEventListener('mouseleave', () => {
            cursor.style.display = 'none';
        });
    
        // Scroll au clic, dans la bonne direction
        imageContainer.addEventListener('click', () => {
            const direction = cursor.dataset.direction;
            const amount = 200;
            imageContainer.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth'
            });
        });