document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('#container');

    const gridDiv = document.createElement('div');
    gridDiv.style.border = 'blue';
    gridDiv.classList.add('gridDiv');
    container.appendChild(gridDiv);
});
