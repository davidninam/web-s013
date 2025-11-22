import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

/**
 * Landing Hero Component
 * Main hero section with CTA buttons
 */
@Component({
  selector: 'app-landing-hero',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './landing-hero.html',
  styleUrl: './landing-hero.scss'
})
export class LandingHeroComponent {}
