import { inject, Injectable } from "@angular/core";
import { Subscription } from "@subscription/domain/entity/subscription";
import { SubscriptionRepository } from "@subscription/domain/repository/subscriptionRepository";
import { SubscribeUsecase } from "@subscription/domain/usecase/subscribe";
import { RepositoryInMemoryService } from "@subscription/infrastructure/repository/subscription-repository.service";

@Injectable({
  providedIn: 'root'
})
export class SubscribeImplUseCase implements SubscribeUsecase {

  private subscribeRepository: SubscriptionRepository = inject(RepositoryInMemoryService);

  suscribe(subscription: Subscription): void {
    this.subscribeRepository.addSubscription(subscription);
  }

}
