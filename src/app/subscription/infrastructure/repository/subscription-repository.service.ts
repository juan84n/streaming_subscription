import { Injectable } from '@angular/core';
import { Subscription } from '@subscription/domain/entity/subscription';
import { SubscriptionRepository } from '@subscription/domain/repository/subscriptionRepository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryInMemoryService implements SubscriptionRepository {

  private subscriptionList: Subscription[] = [];
  constructor() { }
  updateSubscription(subscription: Subscription): Subscription {
    this.subscriptionList = this.subscriptionList.map(subs => {
      if(subs.user.email === subscription.user.email && subs.isActive){
        return subscription;
      }
      return subs;
    });

    return subscription;
  }

  addSubscription(subscription: Subscription): Subscription {
    this.subscriptionList.push(subscription);
    return subscription;
  }

  findByUserEmail(email: string): Subscription | undefined {
    return this.subscriptionList.find(subs => subs.user.email === email && subs.isActive);
  }

  findByUserEmailAndPassword(email: string, password: string): Subscription | undefined {
    return this.subscriptionList.find(subs => subs.user.email === email && subs.user && subs.isActive);
  }

  findAll(): Subscription[] {
    return this.subscriptionList;
  }
}
