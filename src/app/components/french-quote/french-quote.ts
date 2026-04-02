import { Component, OnDestroy, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-french-quote',
  standalone: true,
  imports: [NgClass],
  templateUrl: './french-quote.html',
  styleUrl: './french-quote.css'
})
export class FrenchQuote implements OnInit, OnDestroy {
  quotes = [
    'Tailor-made lessons carefully curated according to your age, level, and learning goals.',
    'Learn French naturally through engaging media such as songs, newspaper articles, and radio segments.',
    'Targeted practice focused on specific areas where you need the most improvement.',
    'Holistic language development with equal focus on speaking, listening, reading and writing - not just grammar.',
    'Unmatched personal attention in small batches of no more than four students, ensuring individualised support.'
  ];

  currentIndex = 0;
  displayedQuote = this.quotes[0];
  fadeClass = 'fade-in';

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.ngZone.run(() => {
      this.intervalId = setInterval(() => {
        this.fadeClass = 'fade-out';
        this.cdr.detectChanges();

        this.timeoutId = setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.quotes.length;
          this.displayedQuote = this.quotes[this.currentIndex];
          this.fadeClass = 'fade-in';
          this.cdr.detectChanges();
        }, 300);
      }, 3500);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}