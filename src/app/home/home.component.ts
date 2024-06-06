import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

const components = [
  HousingLocationComponent
]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
