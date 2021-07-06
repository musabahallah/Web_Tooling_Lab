import "./style.css";
const element = document.createElement("header");

element.innerHTML = "WepPack Task";
element.classList.add('info')
document.body.appendChild(element);
import photo from '../../assets/2.jpg'
const img = document.createElement("img");
img.src=photo;
img.style.width="50px"
img.style.height="50px"
element.appendChild(img);

// nooo




