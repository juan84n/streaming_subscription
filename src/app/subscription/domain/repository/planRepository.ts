import { Plan } from "../entity/plan";

export interface PlanRepository {
  findAllPlans(): Plan[];
}
