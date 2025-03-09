import { Subscription } from "../entity/subscription";

export interface SubscribeUsecase {
  suscribe(subscription: Subscription): void;
}
