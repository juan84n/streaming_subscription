import { Inject, Injectable } from "@angular/core";
import { Subscription } from "@subscription/domain/entity/subscription";
import { SubscriptionRepository } from "@subscription/domain/repository/subscriptionRepository";
import { SubscribeUsecase } from "@subscription/domain/usecase/subscribe";
import { SUBSCRIPTION_REPOSITORY } from "../../config/tokens";

@Injectable({
  providedIn: 'root'
})
export class SubscribeImplUseCase implements SubscribeUsecase {

  constructor(@Inject(SUBSCRIPTION_REPOSITORY) private subscribeRepository: SubscriptionRepository ){}

  suscribe(subscription: Subscription): void {
    this.subscribeRepository.addSubscription(subscription);
  }

}
