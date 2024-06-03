import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

const components = [
  HomeComponent
]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hent';
}
