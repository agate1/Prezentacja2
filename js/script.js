

document.body.addEventListener('click', resetSlides, true);

//add scaling on click to white sheet
var bk = document.getElementsByClassName('biala-kartka')[0];
var cn = document.getElementsByClassName('container')[0];
var zk = document.getElementById('zolta-kartka');
var sn = document.getElementById('sticky-note');

bk.addEventListener('click', scale, true);
bk.addEventListener('click', removeItems, true);
bk.addEventListener('dblclick', secondSlide, true);



function scale(e) {
    cn.classList.add('scale');
    bk.classList.remove('rotate-right');
}

function resetSlides(e) {
    cn.classList.remove('scale');
    cn.classList.remove('first-slide');
    bk.classList.add('rotate-right');
}

function removeItems() {
    zk.classList.add('visible-el');
}

function secondSlide() {
    cn.classList.add('first-slide');
}