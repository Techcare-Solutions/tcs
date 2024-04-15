import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css" ;//

import './css/index.scss'
import './css/site.scss'

import {loadFooter, loadNavbar} from "./js/loadTemplates";

window.addEventListener("load", INIT);

function INIT() {
    //loadFooter();
    loadNavbar();
}