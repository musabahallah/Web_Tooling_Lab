import './style.scss';
function component() {
    const element = document.createElement("div");
  
    element.innerHTML = "Al Ahly Number 1";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());