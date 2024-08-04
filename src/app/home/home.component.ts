import { Component } from '@angular/core';
import { StarboxComponent } from "../starbox/starbox.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarboxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
