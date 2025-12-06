import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-atendentes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './atendentes.html',
  styleUrl: './atendentes.css'
})
export class AtendentesComponent {

  private router = inject(Router);

  // Lista simulada
  atendentes = [
    { id: 1, nome: 'Julia Martins', setor: 'Recepção Térreo', telefone: '(11) 91111-2222', turno: 'Manhã' },
    { id: 2, nome: 'Pedro Henrique', setor: 'Call Center', telefone: '(11) 93333-4444', turno: 'Tarde' },
    { id: 3, nome: 'Amanda Costa', setor: 'Recepção Consultórios', telefone: '(21) 95555-6666', turno: 'Integral' }
  ];

  editar(atendente: any) {
    // Navega para edição
    this.router.navigate(['/sistema/atendentes', atendente.id]);
  }

  excluir(atendente: any) {
    if (confirm(`Tem certeza que deseja excluir ${atendente.nome}?`)) {
      this.atendentes = this.atendentes.filter(a => a !== atendente);
    }
  }
}