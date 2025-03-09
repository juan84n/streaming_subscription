import { Subscription } from "../entity/subscription";

export interface CancelUsecase {
  cancel(subscription: Subscription): boolean;
}
