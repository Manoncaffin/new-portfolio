document.getElementById('moreInfoBtn').addEventListener('click', function() {
    const moreText = document.querySelector('.more-text');
    const allDetails = document.querySelector('.all-details');
    const images = document.querySelectorAll('.project-image img'); // Sélectionne toutes les images
    const imageProjects = document.querySelectorAll('.project-image'); // Sélectionne tous les conteneurs d'images

    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'block'; 
        allDetails.style.display = 'block'; 
        this.innerText = 'Moins d\'informations'; 
        
        // Ajoute la classe .reduced-size pour rétrécir les images
        images.forEach(image => {
            image.classList.add('reduced-size');
        });

        // Ajoute la classe .reduced-size-project pour rétrécir le conteneur des images
        imageProjects.forEach(imageProject => {
            imageProject.classList.add('reduced-size-project');
        });
    } else {
        moreText.style.display = 'none'; 
        allDetails.style.display = 'none';
        this.innerText = 'Plus d\'informations'; 
        
        // Retire la classe .reduced-size pour restaurer les tailles originales des images
        images.forEach(image => {
            image.classList.remove('reduced-size');
        });

        // Retire la classe .reduced-size-project pour restaurer le conteneur des images
        imageProjects.forEach(imageProject => {
            imageProject.classList.remove('reduced-size-project');
        });
    }
});
