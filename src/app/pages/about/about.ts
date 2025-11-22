import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

/**
 * About Page Component
 * Information about Nina.com.bo, team, and awards
 */
@Component({
  selector: 'app-about',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {}
