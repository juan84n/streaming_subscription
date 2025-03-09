import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { UserLoggedInService } from '@subscription/infrastructure/services/user-logged-in.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  private router = inject(Router);
  public userLoggedIn = inject(UserLoggedInService);

  logout(){
    this.userLoggedIn.setLoggedIn(false);
    this.userLoggedIn.setSubscription(undefined);
    this.router.navigate(['/']);
  }
}

