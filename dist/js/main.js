"use strict";
/**
 * Main scripting for all the project's basic functions.
 * @author Jake Hahne (Updated Summer 2024)
 */
class PortfolioManager {
    constructor() {
        this.currentIndex = 0;
        this.navigationLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section');
        this.carousel = document.querySelector('.carousel');
        this.carouselCards = document.querySelectorAll('.card');
        this.prevButton = document.querySelector('.carousel-button.prev');
        this.nextButton = document.querySelector('.carousel-button.next');
        this.wallpapers = [
            {
                id: 'wall1',
                title: 'Simple Waves',
                thumbnailUrl: '../src/assets/images/wallpapers/simple_waves.jpg',
                fullSizeUrl: '../src/assets/images/wallpapers/simple_waves.jpg',
            },
            {
                id: 'wall2',
                title: 'Sunset Render',
                thumbnailUrl: '../src/assets/images/wallpapers/sunset_render.jpg',
                fullSizeUrl: '../src/assets/images/wallpapers/sunset_render.jpg',
            },
            // Add more wallpapers here...
        ];
        this.init();
    }
    init() {
        this.setupLicense();
        this.setupNavigation();
        this.renderWallpapers();
        this.setupSkillsAnimation();
        this.setupLazyLoading();
        this.setupCarousel();
    }
    setupLicense() {
        const license = document.querySelector('.license');
        const flipButton = document.querySelector('.flip-license-btn');
        flipButton === null || flipButton === void 0 ? void 0 : flipButton.addEventListener('click', () => license === null || license === void 0 ? void 0 : license.classList.toggle('is-flipped'));
    }
    setupNavigation() {
        this.navigationLinks.forEach((link) => {
            link.addEventListener('click', (e) => this.handleNavClick(e, link));
        });
    }
    handleNavClick(e, link) {
        var _a;
        e.preventDefault();
        const targetId = ((_a = link.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.substring(1)) || '';
        this.navigationLinks.forEach(navLink => navLink.classList.remove('active'));
        this.sections.forEach(section => section.classList.remove('active'));
        link.classList.add('active');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }
    renderWallpapers() {
        const wallpaperGrid = document.querySelector('.wallpaper-grid');
        if (!wallpaperGrid)
            return;
        this.wallpapers.forEach(wallpaper => {
            const wallpaperElement = this.createWallpaperElement(wallpaper);
            wallpaperGrid.appendChild(wallpaperElement);
        });
    }
    createWallpaperElement(wallpaper) {
        const wallpaperItem = document.createElement('div');
        wallpaperItem.classList.add('wallpaper-item');
        wallpaperItem.innerHTML = `
      <img src="${wallpaper.thumbnailUrl}" alt="${wallpaper.title}" class="wallpaper-thumbnail">
      <div class="wallpaper-info">
        <h3>${wallpaper.title}</h3>
        <a href="${wallpaper.fullSizeUrl}" download class="download-button">Download</a>
      </div>
    `;
        return wallpaperItem;
    }
    setupSkillsAnimation() {
        const skillBars = document.querySelectorAll('.skill-bar');
        const skillsSection = document.querySelector('.skills-grid');
        if (skillsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.animateSkillBars(skillBars);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            observer.observe(skillsSection);
        }
    }
    animateSkillBars(skillBars) {
        skillBars.forEach((bar) => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    setupLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const image = entry.target;
                        image.src = image.dataset.src || '';
                        image.removeAttribute('loading');
                        observer.unobserve(image);
                    }
                });
            });
            lazyImages.forEach((img) => imageObserver.observe(img));
        }
        else {
            // Fallback for browsers that don't support IntersectionObserver
            lazyImages.forEach((img) => {
                img.src = img.dataset.src || '';
                img.removeAttribute('loading');
            });
        }
    }
    toggleElement(elem) {
        elem.classList.toggle('active');
    }
    setupCarousel() {
        if (this.carousel && this.prevButton && this.nextButton) {
            this.prevButton.addEventListener('click', () => this.scrollCarousel(-1));
            this.nextButton.addEventListener('click', () => this.scrollCarousel(1));
        }
    }
    scrollCarousel(direction) {
        if (this.carousel) {
            const scrollAmount = this.carousel.offsetWidth * direction;
            this.carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioManager();
});
