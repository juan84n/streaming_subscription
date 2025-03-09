import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { SUBSCRIPTION_REPOSITORY } from '@subscription/config/tokens';
import { SubscriptionRepository } from '@subscription/domain/repository/subscriptionRepository';
import { UserLoggedInService } from '@subscription/infrastructure/services/user-logged-in.service';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, RouterLink,
    ReactiveFormsModule, CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public hide = signal(true);
  public exist = signal(true);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private userLoggedIn = inject(UserLoggedInService);
  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(@Inject(SUBSCRIPTION_REPOSITORY) private subscriptionRepository: SubscriptionRepository ){}

  hidePassword(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

    onSubmit() {
      if (this.form.valid) {
          const email = this.form.value.email ?? ''
          const password = this.form.value.password ?? '';

          const subscription = this.subscriptionRepository.findByUserEmailAndPassword(email, password);

          if(subscription){
            this.userLoggedIn.setLoggedIn(true);
            this.userLoggedIn.setSubscription(subscription);
            this.router.navigate(['/subscription/view-subscription']);
          } else {
            this.exist.set(false);
          }

      }
    }
}
