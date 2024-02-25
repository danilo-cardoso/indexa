import { Component, Input } from '@angular/core';
import { Contato } from '../../interfaces/contato';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @Input() contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
  };
}
