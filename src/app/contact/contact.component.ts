import { Component } from '@angular/core';
import { StarboxComponent } from "../starbox/starbox.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarboxComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  preventSubmitAction(event:MouseEvent){
    event.preventDefault();
  }

}
