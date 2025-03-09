import { inject, Injectable } from "@angular/core";
import { Subscription } from "@subscription/domain/entity/subscription";
import { SubscriptionRepository } from "@subscription/domain/repository/subscriptionRepository";
import { FindUseCase } from "@subscription/domain/usecase/find";
import { RepositoryInMemoryService } from "@subscription/infrastructure/repository/subscription-repository.service";

@Injectable({
  providedIn: 'root'
})
export class FindAllImplUseCase implements FindUseCase {
  private subscriptionRepository: SubscriptionRepository = inject(RepositoryInMemoryService);

  findAll(): Subscription[] {
    return this.subscriptionRepository.findAll();
  }

}
