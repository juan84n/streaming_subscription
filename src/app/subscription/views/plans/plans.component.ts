import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { PlansRepositoryService } from '@subscription/infrastructure/repository/plans-repository.service';
import { UserLoggedInService } from '@subscription/infrastructure/services/user-logged-in.service';

@Component({
  selector: 'app-plans',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent implements OnInit {

  private router = inject(Router);
  private userLoggedIn = inject(UserLoggedInService);
  private plans = inject(PlansRepositoryService);

  public plansList = this.plans.findAllPlans();

  ngOnInit(): void {
    const subscriptions = this.userLoggedIn.getSubscription()
    if(subscriptions){
      this.router.navigate(['/subscription/view-subscription']);
    }
  }
}
