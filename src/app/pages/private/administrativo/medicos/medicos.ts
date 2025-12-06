import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
// Removi o import do Service

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './medicos.html',
  styleUrl: './medicos.css'
})
export class MedicosComponent {

  private router = inject(Router);

  // Lista FIXA (Resetada toda vez que entra na tela)
  medicos = [
    { id: 1, nome: 'Dr. Roberto Nunes', crm: '12345-SP', especialidade: 'Cardiologia', telefone: '(11) 99999-0000' },
    { id: 2, nome: 'Dra. Ana Souza', crm: '54321-SP', especialidade: 'Pediatria', telefone: '(11) 98888-1111' },
    { id: 3, nome: 'Dr. Carlos Silva', crm: '98765-MG', especialidade: 'Ortopedia', telefone: '(31) 97777-2222' }
  ];

  editar(medico: any) {
    // Apenas navega passando o ID
    this.router.navigate(['/sistema/admin/medicos', medico.id]);
  }

  excluir(medico: any) {
    if (confirm(`Tem certeza que deseja excluir o(a) ${medico.nome}?`)) {
      // Remove visualmente apenas
      this.medicos = this.medicos.filter(m => m !== medico);
    }
  }
}