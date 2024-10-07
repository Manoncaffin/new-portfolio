document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');
    const projects = document.querySelectorAll('.project');
    const section = document.querySelector('.section');

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const category = tag.getAttribute('data-category');

            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');

            projects.forEach(project => {
                if (category === 'all' || project.classList.contains(category)) {
                    project.classList.remove('hidden'); 
                } else {
                    project.classList.add('hidden'); 
                }
            });

            adjustGrid();
        });
    });

    function adjustGrid() {
        const visibleProjects = document.querySelectorAll('.project:not(.hidden)');
        
        if (window.innerWidth >= 1440) {
            section.style.gridTemplateColumns = `repeat(3, 1fr)`; 
        } else if (window.innerWidth >= 1200) {
            section.style.gridTemplateColumns = `repeat(2, 1fr)`;
        } else {
            section.style.gridTemplateColumns = `repeat(1, 1fr)`;
        }
    }

    adjustGrid();

    window.addEventListener('resize', adjustGrid);
});
