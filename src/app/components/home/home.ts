import { Component } from '@angular/core';
import { Header } from "../header/header";
import { WhyChooseUs } from '../why-choose-us/why-choose-us';
import { FrenchQuote } from '../french-quote/french-quote';
import { Testimonials } from "../testimonials/testimonials";

@Component({
  selector: 'app-home',
  imports: [Header, WhyChooseUs, FrenchQuote, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
