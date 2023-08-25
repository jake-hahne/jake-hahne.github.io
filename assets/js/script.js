'use strict';

/**
 * Main scripting for all the projects basic functions.
 * @author Jake Hahne (Spring 2023)
 */


// toggles an element to be the "active" element
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables and data
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for small screens, either hides or shows additional contact information
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add even listener to all page navigation links
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }

    });
}

/* Script for theme toggle switch, not currently in use
 
// theme toggle switch variables
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function used to change light mode / dark mode theme
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', null);
    }
}

toggleSwitch.addEventListener('change', switchTheme, false); 
*/