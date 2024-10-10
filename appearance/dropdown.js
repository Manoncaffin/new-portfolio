document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.dropdown-menu .tag-mobile');
    const checkbox = document.getElementById('dropdown-toggle');

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            checkbox.checked = false;
        });
    });
});
