import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PlansRepositoryService } from '@subscription/infrastructure/repository/plans-repository.service';
import { Subscription } from '@subscription/domain/entity/subscription';
import { User } from '@subscription/domain/entity/user';
import { Plan } from '@subscription/domain/entity/plan';
import { SubscribeImplUseCase } from '@subscription/application/subscribe/usecase';
import { FindByEmailImplUseCase } from '@subscription/application/findByEmail/usecase';

@Component({
  selector: 'app-subscription',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, RouterLink,
     ReactiveFormsModule, CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionComponent implements OnInit {

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private suscribeUseCase = inject(SubscribeImplUseCase);
  private findByEmailUseCase = inject(FindByEmailImplUseCase);
  private planList: Plan[] = [];

  public plans = inject(PlansRepositoryService);
  public hide = signal(true);
  public emailExist = signal(false);
  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    type: ['', [Validators.required]],
    name: ['', [Validators.required]]
  });

  public periodIncoming: number = 0;
  public typeIncoming: string = '';
  public title = '';
  public isUpdate = false;


  ngOnInit(): void {
    this.planList = this.plans.findAllPlans();
    this.periodIncoming = +(this.route.snapshot.queryParamMap.get('period') || '');
    this.typeIncoming = this.route.snapshot.queryParamMap.get('type') || '';
    this.title = this.periodIncoming === 1 ? 'Subscripción Mensual' : 'Subscripción Anual';
    this.form.get('type')?.setValue(this.typeIncoming);
  }

  private emailAlreadyExist(email: string){
    const exist = this.findByEmailUseCase.findByEmail(email);
    return exist?.isActive;
  }

  hidePassword(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit() {
    if (this.form.valid) {
        const name = this.form.value.name ?? '';
        const email = this.form.value.email ?? ''
        const password = this.form.value.password ?? '';
        const type = this.form.value.type ?? '';
        if(!this.emailAlreadyExist(email)){
          const plan = this.planList.find(plan => plan.name === type) ??
          new Plan('1', 'basico', 'Básico', { value: 10 }, { value: 100 });
          const user = new User(name, email, password);
          const subscription = new Subscription(plan, user, this.periodIncoming, new Date());
          this.suscribeUseCase.suscribe(subscription);

          this.router.navigate(['/login']);
        } else {
          this.emailExist.set(true);
        }

    }
  }
}
