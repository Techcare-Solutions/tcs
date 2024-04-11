import footer from '../assets/dynamicHtml/footer.html';
import navbar from '../assets/dynamicHtml/navbar.html';

export function loadFooter(): void {
    document.getElementsByTagName('footer')[0].innerHTML = footer;
    document.getElementById('navbar')!.innerHTML = navbar;
}
