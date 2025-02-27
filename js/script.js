// Memilih elemen dengan kelas 'navbar-nav'
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// Memilih elemen dengan ID 'hamburger-menu'
const hamburger = document.querySelector('#hamburger-menu');

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});