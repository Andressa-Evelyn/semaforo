const img = document.getElementById('img')
const buttons = document.getElementById('buttons');

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png'
}

const trafficLight = (event) => {
    turnOn[event.target.id]();
}

buttons.addEventListener('click',trafficLight);


