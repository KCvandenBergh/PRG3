window.addEventListener('load', init);

let gallery;
let modal;

function init() {
     gallery = document.querySelector('.gallery');
     modal = document.querySelector('#myModal');


    const ajaxRequest = (url, func) => {
        console.log(apiUrl);

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(func)
            .catch((error) => {
                console.log(error)
            });
    }

// API-eindpunt
    const apiUrl = './webservices/index.php';

// Favorietenstatus
    let isFavorite = {};

// Inlezen van initiële data via AJAX
    function loadData() {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                // Data verwerken en galerij opbouwen
                makeGallery(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

// Opbouwen van de galerij
    function makeGallery(data) {
        gallery.innerHTML = ''; // Leegmaken van de galerij

        data.forEach((card) => {
            const {id, name, image, place} = card;

            // Kaart element
            const countryCard = document.createElement('div');
            countryCard.classList.add('country-card');
            countryCard.dataset.id = id;

            // Favoriet knop
            const favoriteBtn = document.createElement('button');
            favoriteBtn.classList.add('favoriteBtn');
            favoriteBtn.innerHTML = '🤍';

            // Favorietenstatus beheren
            isFavorite[id] = JSON.parse(localStorage.getItem(`favoriteItem-${id}`)) || false;

            if (isFavorite[id]) {
                favoriteBtn.innerHTML = '❤️';
                favoriteBtn.classList.add('favorite');
            }

            favoriteBtn.addEventListener('click', () => {
                toggleFavorite(id, favoriteBtn);
            });

            // Afbeelding
            const img = document.createElement('img');
            img.src = image;
            img.classList.add('image');

            // Plaatsnaam
            const placeElement = document.createElement('h3');
            placeElement.classList.add('product-price');
            placeElement.textContent = place;

            // Landnaam
            const nameElement = document.createElement('h2');
            nameElement.classList.add('country-name');
            nameElement.textContent = name;

            // Details knop
            const detailsBtn = document.createElement('button');
            detailsBtn.classList.add('detailsBtn');
            detailsBtn.innerHTML = 'ℹ';
            detailsBtn.dataset.id = id;
            detailsBtn.addEventListener('click', () => {
                fetchDetails(id);
            });

            // Elementen toevoegen aan de kaart
            countryCard.append(favoriteBtn, img, placeElement, nameElement, detailsBtn);

            // Kaart toevoegen aan de galerij
            gallery.appendChild(countryCard);
        });
    }




// Details ophalen via AJAX
    function fetchDetails(id) {
        const url = `${apiUrl}?id=${id}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                // Details weergeven
                showDetails(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

// Details weergeven in modaal venster
    function showDetails(card) {
        modal.style.visibility = 'visible';
        const detailsCard = document.getElementById('modal-content');
        detailsCard.innerHTML = '';

        const detailsName = document.createElement('h2');
        detailsName.innerHTML = card.name + 'Details:';
        detailsCard.appendChild(detailsName);

        const info = document.createElement('p');
        info.innerHTML = card.info;
        detailsCard.appendChild(info);

        const category = document.createElement('h5');
        category.innerHTML = 'Category: ' + card.tags;
        detailsCard.appendChild(category);

        const closeDetails = document.getElementById('modal-close');
        closeDetails.addEventListener('click', () => {
            modal.style.visibility = 'hidden';
        });
    }

// Favorietstatus omkeren
    function toggleFavorite(id, favoriteBtn) {
        isFavorite[id] = !isFavorite[id];

        if (isFavorite[id]) {
            localStorage.setItem(`favoriteItem-${id}`, JSON.stringify(true));
            favoriteBtn.innerHTML = '❤';
            favoriteBtn.classList.add('favorite');
        } else {
            localStorage.removeItem(`favoriteItem-${id}`);
            favoriteBtn.innerHTML = '🤍';
            favoriteBtn.classList.remove('favorite');
        }
    }

// Laden van initiële data
    window.addEventListener('load', () => {
        loadData();
    });
}
