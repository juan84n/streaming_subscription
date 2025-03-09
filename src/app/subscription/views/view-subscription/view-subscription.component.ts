import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from '@subscription/domain/entity/subscription';
import { UserLoggedInService } from '@subscription/infrastructure/services/user-logged-in.service';
import { NavComponent } from '../nav/nav.component';
import { CancelImplUseCase } from '@subscription/application/cancel/usecase';

@Component({
  selector: 'app-view-subscription',
  imports: [MatButtonModule, MatCardModule, MatIconModule, DatePipe, NavComponent, RouterLink],
  templateUrl: './view-subscription.component.html',
  styleUrl: './view-subscription.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewSubscriptionComponent implements OnInit {
  private userLoggedIn = inject(UserLoggedInService);
  private cancelUseCase = inject(CancelImplUseCase);
  private router = inject(Router);

  public subscription: Subscription | undefined = this.userLoggedIn.getSubscription();

  ngOnInit(): void {
    if(!this.subscription) {
      this.router.navigate(['/']);
    }
  }

  cancelSubscription(){
    if(this.subscription) {
      const cancel = confirm("Realmente quiere cancelar su plan?");
      if(cancel){
        this.cancelUseCase.cancel(this.subscription);
        this.userLoggedIn.setSubscription(undefined);
        this.userLoggedIn.setLoggedIn(false);
        this.router.navigate(['/']);
      }
    }
  }
}
