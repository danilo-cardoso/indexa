import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactComponent } from './components/contact/contact.component';
import { Contato } from './interfaces/contato';

import agenda from './agenda.json';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contato[] = agenda;

  filterContactsByLetter(letra: string): Contato[] {
    return this.contacts.filter((contact) => {
      return contact.nome.toLowerCase().startsWith(letra.toLowerCase());
    });
  }
}
