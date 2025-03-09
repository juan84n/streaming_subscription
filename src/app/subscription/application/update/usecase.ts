import { Inject, Injectable } from "@angular/core";
import { SUBSCRIPTION_REPOSITORY } from "@subscription/config/tokens";
import { Subscription } from "@subscription/domain/entity/subscription";
import { SubscriptionRepository } from "@subscription/domain/repository/subscriptionRepository";
import { UpdateUsecase } from "@subscription/domain/usecase/update";

@Injectable({
  providedIn: 'root'
})
export class UpdateImplUseCase implements UpdateUsecase {

  constructor(@Inject(SUBSCRIPTION_REPOSITORY) private subscriptionRepository: SubscriptionRepository ){}

  update(subscription: Subscription): void {
    this.subscriptionRepository.updateSubscription(subscription);
  }
}
