import { Component } from '@angular/core';
import { LandingHeroComponent } from '../../components/landing-hero/landing-hero';
import { ServicesSectionComponent } from '../../components/services-section/services-section';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';

/**
 * Home Page Component
 * Landing page with hero section, services overview, and testimonials
 */
@Component({
  selector: 'app-home',
  imports: [LandingHeroComponent, ServicesSectionComponent, TestimonialsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
