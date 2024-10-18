document.getElementById('moreInfoBtn').addEventListener('click', function() {
    const moreText = document.querySelector('.more-text');
    const allDetails = document.querySelector('.all-details');
    const images = document.querySelectorAll('.image-project img'); // Sélectionne toutes les images dans .image-project
    const imageProjects = document.querySelectorAll('.image-project'); // Sélectionne tous les conteneurs d'images

    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'block'; 
        allDetails.style.display = 'block'; 
        this.innerText = 'Moins d\'informations'; 
        
        // Ajoute la classe .reduced-size pour rétrécir les images
        images.forEach(image => {
            image.classList.add('reduced-size');
            image.classList.add('adjusted-position'); // Ajoute une classe pour ajuster le positionnement
        });

        // Ajoute une classe pour modifier le style de image-project
        imageProjects.forEach(imageProject => {
            imageProject.classList.add('reduced-size-project'); // Ajouter une classe pour modifier image-project
        });
    } else {
        moreText.style.display = 'none'; 
        allDetails.style.display = 'none';
        this.innerText = 'Plus d\'informations'; 
        
        // Retire la classe .reduced-size pour restaurer les tailles originales des images
        images.forEach(image => {
            image.classList.remove('reduced-size');
            image.classList.remove('adjusted-position'); // Retire la classe pour restaurer le positionnement
        });

        // Retire la classe pour restaurer le style de image-project
        imageProjects.forEach(imageProject => {
            imageProject.classList.remove('reduced-size-project'); // Retirer la classe pour modifier image-project
        });
    }
});
