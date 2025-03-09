import { inject, Injectable } from "@angular/core";
import { Subscription } from "@subscription/domain/entity/subscription";
import { SubscriptionRepository } from "@subscription/domain/repository/subscriptionRepository";
import { UpdateUsecase } from "@subscription/domain/usecase/update";
import { RepositoryInMemoryService } from "@subscription/infrastructure/repository/subscription-repository.service";

@Injectable({
  providedIn: 'root'
})
export class UpdateImplUseCase implements UpdateUsecase {

  private subscribeRepository: SubscriptionRepository = inject(RepositoryInMemoryService);

  update(subscription: Subscription): void {
    this.subscribeRepository.updateSubscription(subscription);
  }
}
