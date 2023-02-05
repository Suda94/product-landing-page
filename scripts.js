

function imgslider(anything) {
    document.querySelector('.honda').src = anything;

}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
// navigation menu on Responsive mode. 
function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}