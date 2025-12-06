import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar';
import {  FooterComponent } from '../../../components/footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, NavbarComponent , FooterComponent, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  contato = {
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  };

  // Variável para controlar se o formulário foi enviado
  enviado = false;

  enviarContato() {
    // Aqui você poderia enviar os dados para uma API
    console.log('Contato enviado:', this.contato);

    // Marcar como enviado
    this.enviado = true;

    // Limpar os dados do formulário (opcional)
    this.contato = {
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    };

    // Exibir pop-up
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  }
}
