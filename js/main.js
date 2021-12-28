const links = document.querySelector('.links');
const anchor = document.querySelectorAll(".link");
const header = document.querySelector('header');
const icon = document.querySelector('.menu');
but.addEventListener('click', function() {
    links.classList.add('active');
    links.classList.remove('hidden');
});
// anchor.addEventListener("click",function() {
//     for(let i = 0; i < 6; i++) {
//         anchor[i].classList.add('after');

//     }
// });
window.addEventListener("scroll", function() {
    scrollHeader();
    scrollLinks();
    removeHeader();
    console.log(window.pageYOffset)
});
function scrollHeader() {
    if (window.pageYOffset >= 435) {
        header.classList.add('scroll');
        icon.classList.add('scroll');
    } 
}
function removeHeader() {
    if (window.pageYOffset == 0) {
        header.classList.remove('scroll');
        icon.classList.remove('scroll');

    } 
}
function scrollLinks() {
    if (window.pageYOffset >= 435) {
        for(let i = 0; i < 6; i++) {
            anchor[i].classList.add('scroll')

        }
    } 
}

/**
 * on click on anchor
 * show the special content
 * 
 * 
 * 
 * 
 */
