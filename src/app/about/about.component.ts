import { Component } from '@angular/core';
import { StarboxComponent } from "../starbox/starbox.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [StarboxComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
