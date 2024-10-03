document.addEventListener('DOMContentLoaded', () => {
    // Écoute les clics sur les boutons des tags
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const selectedCategory = tag.getAttribute('data-category');

            // Floute tous les projets
            document.querySelectorAll('.project').forEach(project => {
                // Si le projet appartient à la catégorie sélectionnée, ne le floute pas
                if (project.classList.contains(selectedCategory)) {
                    project.classList.remove('flou'); // Retire le flou
                } else {
                    project.classList.add('flou'); // Ajoute le flou
                }
            });
        });
    });
});
