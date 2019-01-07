import './style.css'

function component() {
    let element = document.createElement('div');

    element.innerHTML = "<b>ok</b>";
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
