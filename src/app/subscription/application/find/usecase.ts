import { Inject, Injectable } from "@angular/core";
import { SUBSCRIPTION_REPOSITORY } from "@subscription/config/tokens";
import { Subscription } from "@subscription/domain/entity/subscription";
import { SubscriptionRepository } from "@subscription/domain/repository/subscriptionRepository";
import { FindUseCase } from "@subscription/domain/usecase/find";

@Injectable({
  providedIn: 'root'
})
export class FindAllImplUseCase implements FindUseCase {
  constructor(@Inject(SUBSCRIPTION_REPOSITORY) private subscriptionRepository: SubscriptionRepository ){}

  findAll(): Subscription[] {
    return this.subscriptionRepository.findAll();
  }

}
