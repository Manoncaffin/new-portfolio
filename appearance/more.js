document.getElementById('moreInfoBtn').addEventListener('click', function() {
    const moreText = document.querySelector('.more-text');
    const allDetails = document.querySelector('.all-details');
    const images = document.querySelectorAll('.project-image img');
    const imageProjects = document.querySelectorAll('.project-image'); 

    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'block'; 
        allDetails.style.display = 'block'; 
        this.innerText = 'Moins d\'informations'; 
        

        images.forEach(image => {
            image.classList.add('reduced-size');
        });

        // rétrécir le conteneur des images
        imageProjects.forEach(imageProject => {
            imageProject.classList.add('reduced-size-project');
        });
    } else {
        moreText.style.display = 'none'; 
        allDetails.style.display = 'none';
        this.innerText = 'Plus d\'informations'; 
        
        // restaurer les tailles originales des images
        images.forEach(image => {
            image.classList.remove('reduced-size');
        });

        // pour restaurer le conteneur des images
        imageProjects.forEach(imageProject => {
            imageProject.classList.remove('reduced-size-project');
        });
    }
});
