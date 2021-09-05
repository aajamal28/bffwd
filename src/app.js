import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style/style.css";
import "./component/app-bar.js";

import {
    main,
    search
} from "./view/main.js";

document.addEventListener("DOMContentLoaded", search);
document.addEventListener("DOMContentLoaded", main);