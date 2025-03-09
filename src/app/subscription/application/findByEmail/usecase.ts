import { Inject, Injectable } from "@angular/core";
import { SUBSCRIPTION_REPOSITORY } from "@subscription/config/tokens";
import { Subscription } from "@subscription/domain/entity/subscription";
import { SubscriptionRepository } from "@subscription/domain/repository/subscriptionRepository";
import { FindByEmailUseCase } from "@subscription/domain/usecase/findByEmail";

@Injectable({
  providedIn: 'root'
})
export class FindByEmailImplUseCase implements FindByEmailUseCase {

  constructor(@Inject(SUBSCRIPTION_REPOSITORY) private subscriptionRepository: SubscriptionRepository ){}

  findByEmail(email: string): Subscription | undefined {
    return this.subscriptionRepository.findByUserEmail(email);
  }

}
