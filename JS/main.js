/* ----- consts ----- */

const sizes = [8, 16, 32]
const colors = [
    { r: 211, g: 16, b: 123 },
    { r: 23, g: 43, b: 35 },
    { r: 123, g: 223, b: 0 },
]

/* ----- globals ----- */

let img, color = colors[0], size = sizes[0];

/* ----- p5 ----- */

function preload() {
    console.log('preload fired');
    img = loadImage('./images/tshirt.jpg');
    frameRate(120);

}

function setup() {
    console.log('setup fired');
    createCanvas(600, 300);
    image(img, 0, 0, 600, 300);

}

function draw() {

    if (mouseIsPressed) {
        
        stroke(color.r, color.g, color.b)
        fill(color.r, color.g, color.b)
        ellipse(mouseX, mouseY, size)

    }

}

/* ----- creating elements ----- */

$(document).ready(function (){

    for (let i = 0; i < sizes.length; i++) {
        $('.sizes').append($.parseHTML(`<div class="size size-${i + 1}"></div>`))
        $(`.size-${i + 1}`).css('width', `${sizes[i]}px`)
            .css('height', `${sizes[i]}px`)
    }

    for (let i = 0; i < colors.length; i++) {
        let color = colors[i]
        $('.colors').append($.parseHTML(`<div class="color color-${i + 1}"></div>`))
        $(`.color-${i + 1}`).css('background', `rgb(${color.r}, ${color.g}, ${color.b}`)
            .css('box-shadow', `0 0 5px rgba(${color.r}, ${color.g}, ${color.b}, 0.3`)
    }

    $('.sizes').on('click', '.size', event => {
        let classes = $(event.target).attr('class')
        let index = parseInt(classes.substr(classes.length - 1, classes.length)) - 1
        size = sizes[index]
    })

    $('.colors').on('click', '.color', event => {
        let classes = $(event.target).attr('class')
        let index = parseInt(classes.substr(classes.length - 1, classes.length)) - 1
        color = colors[index]
    })

})
