import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css'
})
export class ConsultasComponent {

  private router = inject(Router);

  // Lista simulada de agendamentos
  consultas = [
    { id: 1, paciente: 'Maria da Silva', medico: 'Dr. Roberto Nunes', data: '10/12/2024', hora: '09:00', status: 'Agendado' },
    { id: 2, paciente: 'João Santos', medico: 'Dra. Ana Souza', data: '10/12/2024', hora: '10:30', status: 'Concluído' },
    { id: 3, paciente: 'Fernanda Oliveira', medico: 'Dr. Roberto Nunes', data: '11/12/2024', hora: '14:00', status: 'Cancelado' }
  ];

  // Função para colorir as etiquetas de status
  getCorStatus(status: string): string {
    switch(status) {
      case 'Agendado': return 'badge bg-primary'; // Azul
      case 'Concluído': return 'badge bg-success'; // Verde
      case 'Cancelado': return 'badge bg-danger';  // Vermelho
      default: return 'badge bg-secondary';
    }
  }

  editar(consulta: any) {
    this.router.navigate(['/sistema/consultas', consulta.id]);
  }

  excluir(consulta: any) {
    if (confirm(`Deseja cancelar o agendamento de ${consulta.paciente}?`)) {
      this.consultas = this.consultas.filter(c => c !== consulta);
    }
  }
}