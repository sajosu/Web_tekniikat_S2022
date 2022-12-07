let images = [
    "https://picsum.photos/id/1/800",
    "https://picsum.photos/id/20/800",
    "https://picsum.photos/id/45/800",
    "https://picsum.photos/id/80/800",
    "https://picsum.photos/id/23/800",
]

//haetaan lightboxin kuva container, johon klikattu kuva tulee näkyviin
let imageContainer = document.getElementById('img_container');

//haetaan lightbox
let lightBox = document.getElementById('lightbox');

//lisätään kaikki pikkukuvat taulukosta sivulle
for(image of images) {
    let img = document.createElement('img') //luodaan kuvaelementti, jotta kuva voidaan näyttää
    img.src=image;
    document.body.appendChild(img); //tulostaa kuvat bodyn loppuun
    img.addEventListener('click', openImage);
}

/**
 * Tutkitaan mitä kuvaa klikattiin ja laitetaan sen kuvan src lightboxin kuvaksi.
 * Tuodaan lightbox näkyviin.
 * @param {Event} event 
 */

function openImage(event) {
    let clickedImage = event.currentTarget;
    imageContainer.src = clickedImage.src;
    lightBox.classList.add('visible');
}

//kun kuva on auki ja sivua klikataan, kuva (lightbox) sulkeutuu

lightBox.addEventListener('click', closeImage);

 function closeImage() {
    lightBox.classList.remove('visible');
 }