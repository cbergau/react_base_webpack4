import './main.scss'

function component() {
    let element = document.createElement('div');

    element.innerHTML = "<p>Hallo Welt!</p>";

    return element;
}

document.body.appendChild(component());
