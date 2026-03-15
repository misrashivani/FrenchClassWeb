import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Pricing } from './components/pricing/pricing';
import { Faq } from './components/faq/faq';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'pricing', component: Pricing },
  { path: 'testimonials', component: Testimonials },
  { path: 'questions', component: Faq },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];