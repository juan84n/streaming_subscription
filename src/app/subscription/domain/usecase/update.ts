import { Subscription } from "../entity/subscription";

export interface UpdateUsecase {
  update(subscription: Subscription): void;
}
