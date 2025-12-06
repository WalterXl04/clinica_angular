import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pacientes-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './pacientes-form.html',
  styleUrl: './pacientes-form.css'
})
export class PacientesFormComponent implements OnInit {
  
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
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      convenio: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    // Verifica se tem ID na URL para simular edição
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdicao = true;
      this.simularDados();
    }
  }

  simularDados() {
    // Preenche com dados falsos para parecer que buscou do banco
    this.form.patchValue({
      nome: 'Maria da Silva (Editando)',
      cpf: '111.222.333-44',
      dataNascimento: '1990-05-15',
      telefone: '(11) 98888-7777',
      convenio: 'Unimed',
      email: 'maria@email.com'
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;

    // Simula salvamento
    console.log('Paciente salvo:', this.form.value);
    this.showSuccessMessage = true;

    // Volta para a lista
    setTimeout(() => {
      this.router.navigate(['/sistema/admin/pacientes']); 
    }, 1500);
  }
}