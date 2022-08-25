let changeRed = document.getElementById('change-red')
let changeBlack = document.getElementById('change-black')
let changeBlue = document.getElementById('change-blue')

let current_image = document.getElementById('moto')

function modifyImage(color) {
    current_image.src = `./src/images/cb_twister_${color.toLowerCase()}.png`

    if(color == 'Red') {
        changeRed.style.backgroundColor = '#C60000'
        changeBlack.style.backgroundColor = '#fff'
        changeBlue.style.backgroundColor = '#fff'
    } else if (color == 'Black') {
        changeRed.style.backgroundColor = '#fff'
        changeBlack.style.backgroundColor = '#C60000'
        changeBlue.style.backgroundColor = '#fff'
    } else {
        changeRed.style.backgroundColor = '#fff'
        changeBlack.style.backgroundColor = '#fff'
        changeBlue.style.backgroundColor = '#C60000'
    }
}

changeRed.addEventListener("click", () => modifyImage('Red'))
changeBlack.addEventListener("click", () => modifyImage('Black'))
changeBlue.addEventListener("click", () => modifyImage('Blue'))