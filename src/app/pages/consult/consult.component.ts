import { Component } from '@angular/core';
import { ConsultFormComponent } from "../../forms/consult-form/consult-form.component";

@Component({
  selector: 'app-consult',
  standalone: true,
  imports: [ConsultFormComponent],
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.scss'
})
export class ConsultComponent {

}
