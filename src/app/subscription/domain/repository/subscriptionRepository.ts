import { Subscription } from "../entity/subscription";

export interface SubscriptionRepository {
  addSubscription(subscription: Subscription): Subscription;
  findByUserEmail(email: string): Subscription | undefined;
  findByUserEmailAndPassword(email: string, password: string): Subscription | undefined;
  updateSubscription(subscription: Subscription): Subscription
  findAll(): Subscription[];
}
