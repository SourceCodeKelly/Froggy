document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const time = document.querySelector('#time');
    const score = document.querySelector('#score');
    const startBtn = document.querySelector('#start');
    const carLeft = document.querySelector('.car-left')
    const carRight = document.querySelector('.car-right')
    const logLeft = document.querySelector('.log-left')
    const logRight = document.querySelector('.log-right')
    const width = 9;
    let currentIndex = 76;
    let timer;

    //Place Froggy at Start Point
    squares[currentIndex].classList.add('froggy');

    //Keys
    function moveFroggy(e) {
        squares[currentIndex].classList.remove('froggy')
        switch(e.keyCode) {
            case 37:
                if (currentIndex % width !== 0) currentIndex -= 1;
                break;
            case 38:
                if (currentIndex - width >= 0) currentIndex -= width;
                break;
            case 39:
                if (currentIndex % width < width - 1) currentIndex += 1;
                break;
            case 40:
                if (currentIndex + width < width * width) currentIndex += width;
                break;
        }
        squares[currentIndex].classList.add('froggy');
        fail()
        win()
    }
    //Move cars
    function moveCars() {
        carLeft.forEach(carLeft => moveCarLeft(carLeft));
        carRight.forEach(carRight => moveCarRight(carRight));
    }
    //Move car left
    function moveCarLeft(carLeft) {
        switch (true) {
            case carLeft.classList.contains('c1'):
                carLeft.classList.remove('c1');
                carLeft.classList.add('c2');
                break
            case carLeft.classList.contains('c2'):
                carLeft.classList.remove('c2');
                carLeft.classList.add('c3');
                break
            case carLeft.classList.contains('c3'):
                carLeft.classList.remove('c3');
                carLeft.classList.add('c1');
                break
        }
    }
    //Move car right
    switch (true) {
        case carRight.classList.contains('c1'):
            carRight.classList.remove('c1');
            carRight.classList.add('c3');
            break
        case carRight.classList.contains('c2'):
            carRight.classList.remove('c2');
            carRight.classList.add('c2');
            break
        case carRight.classList.contains('c3'):
            carRight.classList.remove('c3');
            carRight.classList.add('c2');
            break
    }

})