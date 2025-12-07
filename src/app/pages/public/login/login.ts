import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 1. Importante para o *ngIf funcionar
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  // 👇 2. Adicione CommonModule aqui na lista
  imports: [CommonModule, RouterModule, ReactiveFormsModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {
    document.body.classList.add('login-active-page');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('login-active-page');
  }

  login() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const { email, senha } = this.loginForm.value;
      console.log('Login efetuado para:', email);

      // Rota correta conforme seu arquivo de rotas
      this.router.navigate(['/sistema/dashboard']);
      
    } else {
      // Se tiver erro, marca os campos para exibir as mensagens no HTML
      this.loginForm.markAllAsTouched();
    }
  }
}