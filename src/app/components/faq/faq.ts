import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initFaqToggles();
  }

  initFaqToggles(): void {
    document.querySelectorAll<HTMLElement>('.faq-item .faq-question').forEach((btn) => {
      if (btn.dataset['faqBound'] === 'true') return;
      btn.dataset['faqBound'] = 'true';

      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item') as HTMLElement | null;
        const answer = item?.querySelector('.faq-answer') as HTMLElement | null;

        if (!item || !answer) return;

        const isOpen = item.classList.contains('is-open');
        item.classList.toggle('is-open');

        if (!isOpen) {
          answer.style.height = answer.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        } else {
          answer.style.height = '0px';
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
}