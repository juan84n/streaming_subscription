import { ChangeDetectionStrategy, Component} from '@angular/core';
import { PlansComponent } from '../plans/plans.component';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-home',
  imports: [PlansComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
