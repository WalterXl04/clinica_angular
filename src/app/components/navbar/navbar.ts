import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Importante para os links funcionarem

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Adicione imports se tiver links
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent { 

}