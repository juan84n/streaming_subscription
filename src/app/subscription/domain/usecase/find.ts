import { Subscription } from "../entity/subscription";

export interface FindUseCase {
  findAll(): Subscription[];
}
