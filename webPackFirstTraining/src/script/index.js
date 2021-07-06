import _ from 'lodash';
import Icon from '../images/gclass.jpg';
import '../css/style.css';
import "../scss/style.scss";



function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());