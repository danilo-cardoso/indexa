import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SeparatorComponent } from '../../components/separator/separator.component';
import { ContainerComponent } from '../../components/container/container.component';
import { Router, RouterLink } from '@angular/router';
import { ContatosService } from '../../services/contatos.service';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparatorComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
})
export class FormularioContatoComponent implements OnInit{
  contactForm!: FormGroup;
  constructor (
    private service: ContatosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.inicializarFormulário();
  }

  private inicializarFormulário() {
    this.contactForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  public salvarContato() {
    if (this.contactForm.valid) {
      this.service.addContact(this.contactForm.value);
      this.contactForm.reset();
      this.router.navigateByUrl('/lista-contatos');
    }
  }

  public cancelar() {
    this.contactForm.reset();
    this.router.navigateByUrl('/lista-contatos');
  }
}
