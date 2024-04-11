import footer from '../assets/dynamicHtml/footer.html';

export function loadFooter() : void {
    document.getElementsByTagName('footer')[0].innerHTML = footer;
}