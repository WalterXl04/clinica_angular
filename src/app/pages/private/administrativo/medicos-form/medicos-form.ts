import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
// Removi o import do Service

@Component({
  selector: 'app-medicos-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './medicos-form.html',
  styleUrl: './medicos-form.css'
})
export class MedicosFormComponent implements OnInit {
  
  form: FormGroup;
  isSubmitted: boolean = false;
  showSuccessMessage: boolean = false;
  isEdicao: boolean = false;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      crm: ['', Validators.required],
      especialidade: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    // Verifica se tem ID na URL
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEdicao = true;
      // SIMULAÇÃO: Se for edição, preenche com dados "falsos" só para mostrar na tela
      this.simularDadosDeEdicao();
    }
  }

  simularDadosDeEdicao() {
    // Preenche o formulário para parecer que buscou do banco
    this.form.patchValue({
      nome: 'Dr. Roberto Nunes (Simulação)',
      crm: '12345-SP',
      especialidade: 'Cardiologia',
      telefone: '(11) 99999-0000',
      email: 'roberto@clinica.com'
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;

    // Apenas finge que salvou
    console.log('Dados do formulário (Simulação):', this.form.value);
    
    this.showSuccessMessage = true;

    // Volta para a lista
    setTimeout(() => {
      this.router.navigate(['/sistema/admin/medicos']); 
    }, 1500);
  }
}