import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Pricing } from './components/pricing/pricing';
import { Testimonials } from './components/testimonials/testimonials';
import { Nav } from './components/nav/nav';
import { Faq } from "./components/faq/faq";
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header,
    About, Pricing, Testimonials,
    Nav, Faq, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FrenchClassWebsite');
}
