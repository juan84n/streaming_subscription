import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UpdateImplUseCase } from '@subscription/application/update/usecase';
import { Plan } from '@subscription/domain/entity/plan';
import { Subscription } from '@subscription/domain/entity/subscription';
import { User } from '@subscription/domain/entity/user';
import { PlansRepositoryService } from '@subscription/infrastructure/repository/plans-repository.service';
import { UserLoggedInService } from '@subscription/infrastructure/services/user-logged-in.service';

@Component({
  selector: 'app-update-subscription',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, RouterLink,
    ReactiveFormsModule, CommonModule, MatButtonModule, MatCardModule, MatIconModule, DatePipe],
  templateUrl: './update-subscription.component.html',
  styleUrl: './update-subscription.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateSubscriptionComponent implements OnInit {
  private fb = inject(FormBuilder);
  private updateUseCase = inject(UpdateImplUseCase);
  private router = inject(Router);
  private userLoggedIn = inject(UserLoggedInService);


  public currentSubscription: Subscription | undefined;
  public plans = inject(PlansRepositoryService);
  public sameData = signal(false);
  public alreadyExistUpdate = false;
  public form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      type: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.currentSubscription = this.userLoggedIn.getSubscription();
    const email = this.currentSubscription?.user.email ?? ''
    this.form.get('email')?.setValue(email);
    this.form.get('email')?.disable();
    this.alreadyExistUpdate = !!this.currentSubscription?.nextSubscription;
  }

  onSubmit() {
    if (this.form.valid) {
      const type = this.form.value.type ?? '';
      const plan = this.plans.findAllPlans().find(plan => plan.name === type) ??
      new Plan('1', 'basico', 'Básico', { value: 10 }, { value: 100 });
      if(this.currentSubscription){
        if(this.currentSubscription.plan.name !== plan.name){
          this.currentSubscription.update(plan, new Date());
          this.updateUseCase.update(this.currentSubscription);
          this.userLoggedIn.setSubscription(this.currentSubscription);
          this.router.navigate(['/subscription/view-subscription']);
        }else {
          this.sameData.set(true);
        }
      }
    }
  }
}
