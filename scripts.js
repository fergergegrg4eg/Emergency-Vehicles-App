document.getElementById('searchButton').addEventListener('click', function() {
    let query = document.getElementById('searchBar').value.toLowerCase();
    let categories = document.querySelectorAll('.category');
    
    categories.forEach(function(category) {
        let text = category.querySelector('p').textContent.toLowerCase();
        if (text.includes(query)) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });
});
