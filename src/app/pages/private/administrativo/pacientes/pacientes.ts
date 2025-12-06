import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css'
})
export class PacientesComponent {

  private router = inject(Router);

  // Lista simulada de pacientes
  pacientes = [
    { id: 1, nome: 'Maria da Silva', cpf: '111.222.333-44', telefone: '(11) 98888-7777', convenio: 'Unimed' },
    { id: 2, nome: 'João Santos', cpf: '222.333.444-55', telefone: '(11) 97777-6666', convenio: 'Particular' },
    { id: 3, nome: 'Fernanda Oliveira', cpf: '333.444.555-66', telefone: '(21) 96666-5555', convenio: 'Bradesco Saúde' }
  ];

  editar(paciente: any) {
    // Navega para a tela de edição
    this.router.navigate(['/sistema/admin/pacientes', paciente.id]);
  }

  excluir(paciente: any) {
    if (confirm(`Tem certeza que deseja excluir o paciente ${paciente.nome}?`)) {
      this.pacientes = this.pacientes.filter(p => p !== paciente);
    }
  }
}