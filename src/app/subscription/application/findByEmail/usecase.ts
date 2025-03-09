import { inject, Injectable } from "@angular/core";
import { Subscription } from "@subscription/domain/entity/subscription";
import { SubscriptionRepository } from "@subscription/domain/repository/subscriptionRepository";
import { FindByEmailUseCase } from "@subscription/domain/usecase/findByEmail";
import { RepositoryInMemoryService } from "@subscription/infrastructure/repository/subscription-repository.service";

@Injectable({
  providedIn: 'root'
})
export class FindByEmailImplUseCase implements FindByEmailUseCase {
  private subscriptionRepository: SubscriptionRepository = inject(RepositoryInMemoryService);

  findByEmail(email: string): Subscription | undefined {
    return this.subscriptionRepository.findByUserEmail(email);
  }

}
