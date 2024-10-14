import { Component } from '@angular/core';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  name: string = "Daniel Trindade"
}
