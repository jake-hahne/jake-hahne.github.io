/**
 * Main scripting for all the project's basic functions.
 * @author Jake Hahne (Updated Summer 2024)
 */

interface Wallpaper {
  id: string;
  title: string;
  thumbnailUrl: string;
  fullSizeUrl: string;
}

class PortfolioManager {
  private navigationLinks: NodeListOf<HTMLButtonElement>;
  private sections: NodeListOf<HTMLElement>;
  private wallpapers: Wallpaper[];
  private carousel: HTMLElement | null;
  private carouselCards: NodeListOf<HTMLElement>;
  private prevButton: HTMLElement | null;
  private nextButton: HTMLElement | null;
  private currentIndex: number = 0;

  constructor() {
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

  private init(): void {
    this.setupLicense();
    this.setupNavigation();
    this.renderWallpapers();
    this.setupSkillsAnimation();
    this.setupLazyLoading();
    this.setupCarousel();
  }

  private setupLicense(): void {
    const license = document.querySelector('.license');
    const flipButton = document.querySelector('.flip-license-btn');
    flipButton?.addEventListener('click', () => license?.classList.toggle('is-flipped'));
  }

  private setupNavigation(): void {
    this.navigationLinks.forEach((link: HTMLButtonElement) => {
      link.addEventListener('click', (e: Event) => this.handleNavClick(e, link));
    });
  }

  private handleNavClick(e: Event, link: HTMLButtonElement): void {
    e.preventDefault();
    const targetId: string = link.getAttribute('href')?.substring(1) || '';
    this.navigationLinks.forEach(navLink => navLink.classList.remove('active'));
    this.sections.forEach(section => section.classList.remove('active'));
    link.classList.add('active');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  }

  private renderWallpapers(): void {
    const wallpaperGrid = document.querySelector('.wallpaper-grid');
    if (!wallpaperGrid) return;
    this.wallpapers.forEach(wallpaper => {
      const wallpaperElement = this.createWallpaperElement(wallpaper);
      wallpaperGrid.appendChild(wallpaperElement);
    });
  }

  private createWallpaperElement(wallpaper: Wallpaper): HTMLElement {
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

  private setupSkillsAnimation(): void {
    const skillBars: NodeListOf<HTMLElement> = document.querySelectorAll('.skill-bar');
    const skillsSection: HTMLElement | null = document.querySelector('.skills-grid');
    if (skillsSection) {
      const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              this.animateSkillBars(skillBars);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(skillsSection);
    }
  }

  private animateSkillBars(skillBars: NodeListOf<HTMLElement>): void {
    skillBars.forEach((bar: HTMLElement) => {
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }

  private setupLazyLoading(): void {
    const lazyImages: NodeListOf<HTMLImageElement> = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              const image = entry.target as HTMLImageElement;
              image.src = image.dataset.src || '';
              image.removeAttribute('loading');
              observer.unobserve(image);
            }
          });
        }
      );

      lazyImages.forEach((img: HTMLImageElement) => imageObserver.observe(img));
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      lazyImages.forEach((img: HTMLImageElement) => {
        img.src = img.dataset.src || '';
        img.removeAttribute('loading');
      });
    }
  }

  private toggleElement(elem: HTMLElement): void {
    elem.classList.toggle('active');
  }

  private setupCarousel(): void {
    if (this.carousel && this.prevButton && this.nextButton) {
      this.prevButton.addEventListener('click', () => this.scrollCarousel(-1));
      this.nextButton.addEventListener('click', () => this.scrollCarousel(1));
    }
  }

  private scrollCarousel(direction: number): void {
    if (this.carousel) {
      const scrollAmount = this.carousel.offsetWidth * direction;
      this.carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioManager();
});