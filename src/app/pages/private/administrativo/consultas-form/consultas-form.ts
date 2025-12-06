import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultas-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './consultas-form.html',
  styleUrl: './consultas-form.css'
})
export class ConsultasFormComponent implements OnInit {
  
  form: FormGroup;
  isSubmitted: boolean = false;
  showSuccessMessage: boolean = false;
  isEdicao: boolean = false;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.form = this.fb.group({
      paciente: ['', Validators.required],
      medico: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      tipo: ['', Validators.required],
      status: ['Agendado'],
      observacoes: ['']
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
      paciente: 'Maria da Silva',
      medico: 'Dr. Roberto Nunes',
      data: '2024-12-10',
      hora: '09:00',
      tipo: 'Consulta',
      status: 'Agendado',
      observacoes: 'Paciente relatou dores de cabeça.'
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;

    console.log('Consulta salva:', this.form.value);
    this.showSuccessMessage = true;

    setTimeout(() => {
      this.router.navigate(['/sistema/consultas']); 
    }, 1500);
  }
}