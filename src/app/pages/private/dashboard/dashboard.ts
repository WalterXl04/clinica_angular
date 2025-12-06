import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- Importe isso!

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink], // <--- Adicione aqui!
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

}