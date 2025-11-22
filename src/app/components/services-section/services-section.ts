import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

/**
 * Services Section Component
 * Displays the main services offered by Nina
 */
@Component({
  selector: 'app-services-section',
  imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss'
})
export class ServicesSectionComponent {
  services = [
    {
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, rápidos y responsivos adaptados a tu negocio',
      icon: 'web'
    },
    {
      title: 'Desarrollo Móvil',
      description: 'Aplicaciones móviles nativas e híbridas para iOS y Android',
      icon: 'phone_android'
    },
    {
      title: 'Software a Medida',
      description: 'Soluciones personalizadas que se adaptan perfectamente a tus necesidades',
      icon: 'settings'
    },
    {
      title: 'Consultoría Digital',
      description: 'Asesoría experta para transformar digitalmente tu empresa',
      icon: 'lightbulb'
    }
  ];
}
