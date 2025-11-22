import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

/**
 * Testimonials Component
 * Displays client testimonials
 */
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'María González',
      company: 'TechStart Bolivia',
      text: 'Nina transformó nuestra presencia digital. El equipo es profesional y muy comprometido con los resultados.',
      rating: 5
    },
    {
      name: 'Carlos Pérez',
      company: 'Comercio Digital SA',
      text: 'Excelente trabajo en el desarrollo de nuestra aplicación móvil. Superaron nuestras expectativas.',
      rating: 5
    },
    {
      name: 'Ana Rodríguez',
      company: 'Innovate Corp',
      text: 'La consultoría digital que recibimos nos ayudó a optimizar nuestros procesos y aumentar la eficiencia.',
      rating: 5
    }
  ];
}
