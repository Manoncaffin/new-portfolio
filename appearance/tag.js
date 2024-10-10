document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag-mobile, .tag-desktop');
    const projects = document.querySelectorAll('.project');
    const section = document.querySelector('.section');
    let activeTag = null;

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const category = tag.getAttribute('data-category');

            if (activeTag === tag) {
                tags.forEach(t => t.classList.remove('active'));
                activeTag = null; 
                projects.forEach(project => {
                    project.classList.remove('hidden'); 
                });
            } else {
                tags.forEach(t => t.classList.remove('active'));
                tag.classList.add('active');
                activeTag = tag;

                projects.forEach(project => {
                    if (category === 'all' || project.classList.contains(category)) {
                        project.classList.remove('hidden'); 
                    } else {
                        project.classList.add('hidden'); 
                    }
                });
            }

            adjustGrid(); 
        });
    });

    function adjustGrid() {
        const visibleProjects = document.querySelectorAll('.project:not(.hidden)');

        if (window.innerWidth >= 1460) {
            section.style.gridTemplateColumns = `repeat(3, 1fr)`; 
        } else if (window.innerWidth >= 1200) {
            section.style.gridTemplateColumns = `repeat(2, 1fr)`;
        } else {
            section.style.gridTemplateColumns = `repeat(1, 1fr)`;
        }

        section.style.gridAutoRows = 'minmax(100px, auto)';
    }

    adjustGrid();

    window.addEventListener('resize', adjustGrid);
});
