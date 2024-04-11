import footer from '../assets/dynamicHtml/footer.html';
import navbar from '../assets/dynamicHtml/navbar.html';

export function loadFooter(): void {
    document.getElementsByTagName('footer')[0].innerHTML = footer;
}

export function loadNavbar(): void {
    const navbarDiv = document.getElementById('navbar') as HTMLDivElement;
    navbarDiv.innerHTML = navbar;
    setActive();
}

function getPage(): String {
    const path = window.location.pathname === '/' ? '/index.html' : window.location.pathname;
    return path;
}

function setActive(): void {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        if ("/" + link.getAttribute('href') === getPage()) {
            link.classList.add('active');
        }
    });
}
