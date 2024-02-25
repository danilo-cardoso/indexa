import { Injectable } from '@angular/core';
import { Contato } from '../interfaces/contato';
@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private contacts: Contato[] = [
    { "id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "ana@email.com"},
  ];

  constructor() {
    // Obtendo dados do localStorage se disponível;
    this.getFromLocalStorage();

    // Salvando dados no localStorage
    this.saveOnLocalStorage();
  }

  private getFromLocalStorage() {
    const contactsLocalStorageString = localStorage.getItem('contacts');
    const contactsLocalStorage: Contato[] = contactsLocalStorageString ? JSON.parse(contactsLocalStorageString) : [];

    // Verificando se os dados obtidos são válidos
    if (contactsLocalStorage[0]) {
      this.contacts = contactsLocalStorage;
    }
  }

  private saveOnLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  public getContacts(): Contato[] {
    return this.contacts;
  }

  public addContact(contact: Contato): void {
    this.contacts.push(contact);
    this.saveOnLocalStorage();
  }

}
