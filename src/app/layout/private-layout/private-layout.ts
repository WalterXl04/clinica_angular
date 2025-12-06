import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // <--- Importou?

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink // <--- ADICIONE ISSO AQUI! Sem isso, o menu não clica.
  ], 
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.css' 
})
export class PrivateLayout {}