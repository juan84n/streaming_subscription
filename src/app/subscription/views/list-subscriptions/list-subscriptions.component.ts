import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { FindAllImplUseCase } from '@subscription/application/find/usecase';

@Component({
  selector: 'app-list-subscriptions',
  imports: [MatButtonModule, MatCardModule, MatIconModule, DatePipe, NavComponent, RouterLink],
  templateUrl: './list-subscriptions.component.html',
  styleUrl: './list-subscriptions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSubscriptionsComponent {
  private findAllUseCase = inject(FindAllImplUseCase);
  public listSubscriptions = this.findAllUseCase.findAll();
}
