const mainImage = require('./images/download.jpeg')
// import mainImage from 
// Create heading node
const heading = document.createElement('h1')

let container = document.querySelector('#root')!
const image = document.createElement('img')
container.appendChild(image)
image.src = mainImage;

heading.textContent = 'Interesting!'
// Append heading node to the DOM
const app = document.querySelector('#root')!
app.append(heading)
app.append(image)