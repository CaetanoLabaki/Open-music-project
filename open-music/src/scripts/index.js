/* Script Global */
import { applyInputRangeStyle } from './inputRange.js'

function routine() {
    return applyInputRangeStyle();
}

routine();

import { albumList } from './albumsDatabase.js'

const albumsContainer = document.querySelector('.albums__container'); 

function addNewAlbum(array) {   
    albumsContainer.innerHTML = "";

    array.forEach(album => {
       const albumItem =  newAlbum(album);
       albumsContainer.appendChild(albumItem);        
    });
}

    addNewAlbum(albumList);


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
 
 

        
    
    


     

