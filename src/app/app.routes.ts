

import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';


export const routes: Routes = [
 { path: '', component: Home },     // Home como principal
  { path: 'home', component: Home }  // Rota opcional /home
];
