import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ContainerComponent } from '../../components/container/container.component';

import { Contato } from '../../interfaces/contato';

import { RouterLink } from '@angular/router';
import { ContatosService } from '../../services/contatos.service';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit{
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contato[] = [];


  filtroBusca: string = '';

  constructor( private service: ContatosService ) { }

  ngOnInit(): void {
    this.contacts = this.service.getContacts();
  }

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
