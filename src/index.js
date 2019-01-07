import './style.css'

function component() {
    let element = document.createElement('div');

    element.innerHTML = "<b>Hallo Welt</b>";
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
