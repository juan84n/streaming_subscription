import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CancelImplUseCase } from '@subscription/application/cancel/usecase';
import { FindAllImplUseCase } from '@subscription/application/find/usecase';
import { FindByEmailImplUseCase } from '@subscription/application/findByEmail/usecase';
import { SubscribeImplUseCase } from '@subscription/application/subscribe/usecase';
import { UpdateImplUseCase } from '@subscription/application/update/usecase';
import { SUBSCRIPTION_REPOSITORY } from '@subscription/config/tokens';
import { RepositoryInMemoryService } from '@subscription/infrastructure/repository/subscription-repository.service';
import { NavComponent } from '@subscription/views/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: SUBSCRIPTION_REPOSITORY, useClass: RepositoryInMemoryService },
    SubscribeImplUseCase,
    CancelImplUseCase,
    FindAllImplUseCase,
    FindByEmailImplUseCase,
    UpdateImplUseCase
  ],
})
export class AppComponent {
  title = 'streaming subscription';
}
