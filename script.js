document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const galleryItems = document.querySelectorAll('.item');

    // Filter gallery items based on search
    searchBar.addEventListener('input', () => {
        const searchText = searchBar.value.toLowerCase();
        galleryItems.forEach(item => {
            const title = item.getAttribute('data-title').toLowerCase();
            item.style.display = title.includes(searchText) ? 'block' : 'none';
        });
    });

    // Add click event to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const imageSrc = item.querySelector('img').src;
            window.location.href = `details.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(imageSrc)}`;
        });
    });
});
