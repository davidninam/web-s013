import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Services Page Component
 * Detailed information about all services offered
 */
@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'Desarrollo Web',
      icon: 'web',
      description: 'Creamos sitios web modernos, responsivos y optimizados para SEO.',
      features: [
        'Diseño responsivo',
        'Optimización SEO',
        'Rendimiento optimizado',
        'Seguridad avanzada'
      ]
    },
    {
      title: 'Desarrollo Móvil',
      icon: 'phone_android',
      description: 'Aplicaciones móviles nativas e híbridas para iOS y Android.',
      features: [
        'Apps nativas iOS/Android',
        'Aplicaciones híbridas',
        'Integración con APIs',
        'Experiencia de usuario excepcional'
      ]
    },
    {
      title: 'Software a Medida',
      icon: 'settings',
      description: 'Desarrollamos soluciones personalizadas adaptadas a tus necesidades.',
      features: [
        'Análisis de requisitos',
        'Arquitectura escalable',
        'Integración de sistemas',
        'Soporte continuo'
      ]
    },
    {
      title: 'Consultoría Digital',
      icon: 'lightbulb',
      description: 'Te asesoramos en tu transformación digital.',
      features: [
        'Estrategia digital',
        'Análisis de procesos',
        'Optimización tecnológica',
        'Capacitación de equipos'
      ]
    }
  ];
}
