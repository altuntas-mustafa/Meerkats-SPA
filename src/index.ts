import './styles/main.scss'
// import 'whatwg-fetch';

// import { createApi } from 'unsplash-js';
// import nodeFetch from 'node-fetch';
// const nodeFetch = require('node-fetch')

// const unsplash = createApi({
//   accessKey: 'MY_ACCESS_KEY',
//   fetch: nodeFetch,
// });

// ------ Webpack add image with asset/resource -----
const mainImage = require('./images/download.jpeg')
const logoContainer = document.querySelector('.logo')!
const image = document.createElement('img')
logoContainer.appendChild(image)
image.src = mainImage;
// ---------end -----

const input = document.querySelector('.input-field');

