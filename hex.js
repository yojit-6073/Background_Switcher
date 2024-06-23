//HEXCODE METHOD    

let intervalId

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color 
}

const startChangingColor = () => {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.querySelector('body').style.backgroundColor = randomColor();
    }
};

const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null; 
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);