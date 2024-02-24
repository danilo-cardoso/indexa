import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from '../../components/separator/separator.component';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SeparatorComponent],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
})
export class FormularioContatoComponent {}
