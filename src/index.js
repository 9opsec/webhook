import './style.css';
import image from './image.png';
import data from './data.json';

console.log("Hello from index.js!");
console.log("JSON Data:", data);

const img = document.createElement('img');
img.src = image;
img.alt = "Webhook Image";
document.body.appendChild(img);
