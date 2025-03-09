import { inject, Injectable } from "@angular/core";
import { Subscription } from "@subscription/domain/entity/subscription";
import { SubscriptionRepository } from "@subscription/domain/repository/subscriptionRepository";
import { CancelUsecase } from "@subscription/domain/usecase/cancel";
import { RepositoryInMemoryService } from "@subscription/infrastructure/repository/subscription-repository.service";

@Injectable({
  providedIn: 'root'
})
export class CancelImplUseCase implements CancelUsecase {

  private subscribeRepository: SubscriptionRepository = inject(RepositoryInMemoryService);

  cancel(subscription: Subscription): boolean {
    this.subscribeRepository.updateSubscription(subscription.cancel());
    return true;
  }
}
