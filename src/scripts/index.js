/* Script Global */

import { fetchAlbums } from './api.js';
const albunsAPI = await fetchAlbums();

//import do Input Range

import { applyInputRangeStyle } from './inputRange.js'

function routine() {
    return applyInputRangeStyle();
}

routine();

//Inserir albums dinamicamente

//import { albumList } from './albumsDatabase.js'

const albumsContainer = document.querySelector('.albums__container'); 

function addNewAlbum(array) {   
    albumsContainer.innerHTML = "";

    array.forEach(album => {
       const albumItem =  newAlbum(album);
       albumsContainer.appendChild(albumItem);        
    });
}

    addNewAlbum(albunsAPI);


function newAlbum(album) {    

    const albumInformationDiv = document.createElement('div');
    albumInformationDiv.classList.add('album__information');


    const albumImage = document.createElement('img');
    albumImage.innerText = album.img;
    albumImage.classList.add('album-Img');
    albumImage.src = album.img;
    albumImage.alt = album.title;

    const albumTitle = document.createElement('h3');
    albumTitle.classList.add('album-title');
    albumTitle.innerText = album.title;    

    const albumNameDiv = document.createElement('div');
    albumNameDiv.classList.add('album__name')

    const artistName = document.createElement('p');
    artistName.innerText = album.band;   

    const genreType = document.createElement('span');
    genreType.innerText = album.genre;    

    const albumPriceDiv = document.createElement('div');
    albumPriceDiv.classList.add('album__price');    

    const albumPrice = document.createElement('p');
    albumPrice.innerText = album.price;
    albumPrice.classList.add('album-price');  
    
    const buttonPurchase = document.createElement('button');
    buttonPurchase.innerText = 'Comprar'
    buttonPurchase.classList.add('button-purchase');

    albumInformationDiv.appendChild(albumImage);
    albumInformationDiv.appendChild(albumTitle);
    albumNameDiv.appendChild(artistName);
    albumNameDiv.appendChild(genreType);
    albumInformationDiv.appendChild(albumNameDiv);
    albumPriceDiv.appendChild(albumPrice); 
    albumPriceDiv.appendChild(buttonPurchase);
    albumInformationDiv.appendChild(albumPriceDiv);
   
    
    return albumInformationDiv;
}

import { themeAnalasys } from './theme.js';
themeAnalasys()

//Dinamismo do Input Range

const priceRange = document.getElementById('price-range');
  const priceDisplay = document.getElementById('price-display');
  const albumListArray = document.querySelectorAll('.album__information');

  // Função para filtrar os álbuns com base no preço

  const filterAlbumsByPrice = () => {
    const selectedPrice = parseFloat(priceRange.value);
    albumListArray.forEach(album => {
      const albumPriceValue = parseFloat(album.querySelector('.album-price').innerText.replace('R$ ', ''));
      if (albumPriceValue <= selectedPrice) {
        album.style.display = 'block'; 
      } else {
        album.style.display = 'none';
      }
    });
  };
  
  priceRange.addEventListener('input', function() {
    const price = parseFloat(this.value).toFixed(2);
    priceDisplay.innerText = `R$ ${price}`;
    filterAlbumsByPrice(); 
  });

 
  filterAlbumsByPrice();
  

  //Lógica de selecionar e deselecioanar os botões de gênero:

const buttonsGenre = document.querySelectorAll('.button_genre');

function toggleSelectedButton() {
    buttonsGenre.forEach(button => {
        button.classList.remove('button-click');
    });
    this.classList.add('button-click')
}

buttonsGenre.forEach(button => {
    button.addEventListener('click', toggleSelectedButton)
});

// Lógica de filtro de genero:

buttonsGenre.forEach(button => {
    button.addEventListener('click', () => {
        const selectGenre = button.textContent.trim();
        albumListArray.forEach(album => {
            const albumGenre = album.querySelector('span').textContent.trim();
            if (albumGenre === selectGenre || selectGenre === 'Todos') {
                album.style.display = 'block';
            } else {
                album.style.display = 'none';
            }
        })        
    })
})





  



















 

        
    
    


     

