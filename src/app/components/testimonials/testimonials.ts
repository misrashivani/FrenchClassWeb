import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials implements AfterViewInit, OnDestroy {
  private currentIndex = 0;
  private resizeHandler?: () => void;

  ngAfterViewInit(): void {
    const track = document.querySelector('.testimonial-track') as HTMLElement | null;
    const nextBtn = document.querySelector('.next') as HTMLElement | null;
    const prevBtn = document.querySelector('.prev') as HTMLElement | null;

    if (!track || !nextBtn || !prevBtn) return;

    const cards = document.querySelectorAll('.testimonial-card');

    const getCardsPerView = (): number => {
      if (window.innerWidth <= 600) return 1;
      if (window.innerWidth <= 992) return 2;
      return 2;
    };

    const getCardStep = (): number => {
      const firstCard = cards[0] as HTMLElement | undefined;
      if (!firstCard) return 0;

      const cardWidth = firstCard.offsetWidth;
      const gap = parseInt(window.getComputedStyle(track).gap) || 25;

      return cardWidth + gap;
    };

    const updateSlider = (): void => {
      const step = getCardStep();
      track.style.transform = `translateX(-${this.currentIndex * step}px)`;

      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, cards.length - cardsPerView);

      prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
      nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1';
      prevBtn.style.pointerEvents = this.currentIndex === 0 ? 'none' : 'auto';
      nextBtn.style.pointerEvents = this.currentIndex >= maxIndex ? 'none' : 'auto';
    };

    nextBtn.addEventListener('click', () => {
      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, cards.length - cardsPerView);

      if (this.currentIndex < maxIndex) {
        this.currentIndex++;
        updateSlider();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        updateSlider();
      }
    });

    this.resizeHandler = () => {
      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, cards.length - cardsPerView);

      if (this.currentIndex > maxIndex) {
        this.currentIndex = maxIndex;
      }

      updateSlider();
    };

    window.addEventListener('resize', this.resizeHandler);

    updateSlider();
  }

  ngOnDestroy(): void {
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }
}