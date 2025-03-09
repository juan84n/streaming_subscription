import { Inject, Injectable } from "@angular/core";
import { Subscription } from "@subscription/domain/entity/subscription";
import { SubscriptionRepository } from "@subscription/domain/repository/subscriptionRepository";
import { CancelUsecase } from "@subscription/domain/usecase/cancel";
import { SUBSCRIPTION_REPOSITORY } from "../../config/tokens";

@Injectable({
  providedIn: 'root'
})
export class CancelImplUseCase implements CancelUsecase {

  constructor(@Inject(SUBSCRIPTION_REPOSITORY) private subscribeRepository: SubscriptionRepository ){}

  cancel(subscription: Subscription): boolean {
    this.subscribeRepository.updateSubscription(subscription.cancel());
    return true;
  }
}
