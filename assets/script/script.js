const getSearchBtn = document.getElementById('search-icon')

getSearchBtn.addEventListener('click', mostraSearch)

function mostraSearch() {
    const getSearchSpace = document.getElementById('search')
    getSearchSpace.classList.toggle('d-none')
}

