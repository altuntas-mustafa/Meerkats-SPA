import './styles/main.scss'
import { createApi } from 'unsplash-js';

const inputField = document.querySelector('.field') as HTMLInputElement;
const getQuery = document.querySelector('.button-search')!;
const previousPage = document.querySelector('.button-previous')!;
const nextPage = document.querySelector('.button-next')!;
const searchQueries = document.querySelector('#search__queries')!;
let value = ''

getQuery.addEventListener('click',() => {
  value = inputField.value;
  localStorage.setItem(value,value);
  const searchData = window.localStorage;
  console.log('searchData', searchData);
  Object.keys(searchData).forEach(key => {
    console.log('hey', key);
    const arg = window.localStorage.getItem(key)!
    const optionElement: HTMLElement = document.createElement('option');
    optionElement.innerHTML = arg;
    searchQueries.appendChild(optionElement)
  })
  getUnsplashPhotos(value); 
})

previousPage.addEventListener('click',() => {
 window.history.back()
})

nextPage.addEventListener('click',() => {
  window.history.forward()
 })

const mainImage = require('./images/download.jpeg')
const logoContainer = document.querySelector('.logo')!
const image = document.createElement('img')
logoContainer.appendChild(image)
image.src = mainImage;
// ---------end -----

const unsplash = createApi({
  accessKey: 'W3ZYLO4p0TjuNtGtCxuUxd-VQjISiTJdPPGkQFDXz3c',
});
function getUnsplashPhotos(value : string) {
  unsplash.search.getPhotos({
    query: `${value}`,
    page: 1,
    perPage: 2
  })
  .then(data => {
    console.log(data);
    const imageContainer = document.querySelector('.image-section')!
    imageContainer.innerHTML = ''
    data.response?.results.forEach(photo => {
      const photoUrl = photo.urls.regular;
      const imgElement: HTMLImageElement = document.createElement('img');
      imgElement.src = photoUrl;
      imageContainer.appendChild(imgElement);
    })
  })
}
// fetch(`${apiUrl}?page=1&query=car&client_id=W3ZYLO4p0TjuNtGtCxuUxd-VQjISiTJdPPGkQFDXz3c`, { headers })
//   .then((response) => response.json())
//   .then((data) => {
//     const photoUrls: string[] = data.results.map((photo: any) => photo.urls.regular);
//     const selectedPhotos: string[] = [];

//     while (selectedPhotos.length < 2) {
//       const randomIndex = Math.floor(Math.random() * photoUrls.length);
//       const randomPhoto = photoUrls[randomIndex];
//       if (!selectedPhotos.includes(randomPhoto)) {
//         selectedPhotos.push(randomPhoto);
//       }
//     }
//     selectedPhotos.forEach((photoUrl) => {
//       const imgElement: HTMLImageElement = document.createElement('img');
//       imgElement.src = photoUrl;
//       document.body.appendChild(imgElement);
//     });
//   })
//   .catch((error) => console.error(error));
// ------ Webpack add image with asset/resource -----
// const headers: Headers = new Headers({
  //   'Authorization': `Client-ID ${accessKey}`,
  // });
  
// const apiUrl: string = 'https://api.unsplash.com/search/photos';