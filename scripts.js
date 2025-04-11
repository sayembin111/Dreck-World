// Search functionality (basic version)
document.getElementById('searchBar').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const torrentCards = document.querySelectorAll('.torrent-card');
    
    torrentCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
