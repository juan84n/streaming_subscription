import { Subscription } from "../entity/subscription";

export interface FindByEmailUseCase {
  findByEmail(email: string): Subscription | undefined;
}
