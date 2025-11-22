import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ServicesComponent } from './pages/services/services';
import { ContactComponent } from './pages/contact/contact';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';

/**
 * Application routing configuration
 * Defines routes for all main pages: home, about, services, contact, login, register
 */
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acerca', component: AboutComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'contactos', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];
