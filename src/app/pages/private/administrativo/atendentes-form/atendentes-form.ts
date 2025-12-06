import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atendentes-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './atendentes-form.html',
  styleUrl: './atendentes-form.css'
})
export class AtendentesFormComponent implements OnInit {
  
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
      setor: ['', Validators.required],
      turno: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdicao = true;
      this.simularDados();
    }
  }

  simularDados() {
    this.form.patchValue({
      nome: 'Julia Martins (Editando)',
      cpf: '999.888.777-66',
      setor: 'Recepção Térreo',
      turno: 'Manhã',
      telefone: '(11) 91111-2222',
      email: 'julia@clinica.com'
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;

    console.log('Atendente salvo:', this.form.value);
    this.showSuccessMessage = true;

    // Volta para a lista
    setTimeout(() => {
      this.router.navigate(['/sistema/atendentes']); 
    }, 1500);
  }
}