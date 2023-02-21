import './styles/main.scss'

const accessKey = 'W3ZYLO4p0TjuNtGtCxuUxd-VQjISiTJdPPGkQFDXz3c'
console.log(accessKey);
const input = document.querySelector('.input-field')!;

const apiUrl: string = 'https://api.unsplash.com/search/photos';
const headers: Headers = new Headers({
  'Authorization': `Client-ID ${accessKey}`,
});

fetch(`${apiUrl}?page=1&query=car&client_id=W3ZYLO4p0TjuNtGtCxuUxd-VQjISiTJdPPGkQFDXz3c`, { headers })
  .then((response) => response.json())
  .then((data) => {
    console.log("object");
    console.trace(data);
    const photoUrls: string[] = data.results.map((photo: any) => photo.urls.regular);
    const selectedPhotos: string[] = [];

    while (selectedPhotos.length < 2) {
      const randomIndex = Math.floor(Math.random() * photoUrls.length);
      const randomPhoto = photoUrls[randomIndex];
      if (!selectedPhotos.includes(randomPhoto)) {
        selectedPhotos.push(randomPhoto);
      }
    }
    selectedPhotos.forEach((photoUrl) => {
      const imgElement: HTMLImageElement = document.createElement('img');
      imgElement.src = photoUrl;
      document.body.appendChild(imgElement);
    });
  })
  .catch((error) => console.error(error));
// ------ Webpack add image with asset/resource -----
const mainImage = require('./images/download.jpeg')
const logoContainer = document.querySelector('.logo')!
const image = document.createElement('img')
logoContainer.appendChild(image)
image.src = mainImage;
// ---------end -----