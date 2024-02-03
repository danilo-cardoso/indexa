import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactComponent } from './components/contact/contact.component';
import { Contato } from './interfaces/contato';

import agenda from './agenda.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contato[] = agenda;

  filtroBusca: string = '';

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filterContactsByLetter(letra: string): Contato[] {
    return this.filterBySearch().filter((contact) => {
      return this.removerAcentos(contact.nome)
        .toLowerCase()
        .startsWith(this.removerAcentos(letra.toLowerCase()));
    });
  }

  filterBySearch(): Contato[] {
    if (!this.filtroBusca) {
      return this.contacts;
    }
    return this.contacts.filter((contato) => {
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .includes(this.removerAcentos(this.filtroBusca.toLowerCase()));
    });
  }
}
