import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink], // Importante para o menu funcionar
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent { 
  // O segredo está aqui: tem que ter "Component" no final
}