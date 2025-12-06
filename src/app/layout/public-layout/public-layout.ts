import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importe o Navbar e o Footer (use Ctrl + . se o caminho estiver errado)
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent], 
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css'
})
export class PublicLayoutComponent {}