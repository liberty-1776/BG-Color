
const h1 = document.querySelector("h1")
function random_bg_color() {
    var x = Math. floor(Math. random() * 256);
    var y = Math. floor(Math. random() * 256);
    var z = Math. floor(Math. random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    h1.innerText = bgColor;
    h1.style.color = 'black'
    document.body.style.background = bgColor;
}



const button = document.querySelector('#btn')
button.addEventListener('click', random_bg_color);

