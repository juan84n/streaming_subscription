import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '@subscription/views/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'streaming subscription';
}
