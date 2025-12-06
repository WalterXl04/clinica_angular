import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Só precisa disso! O resto o Angular resolve nas rotas.
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Você pode manter o título ou apagar, não interfere
  title = 'clinica_angular';
}