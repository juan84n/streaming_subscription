import { Injectable } from '@angular/core';
import { Plan } from '@subscription/domain/entity/plan';
import { PlanRepository } from '@subscription/domain/repository/planRepository';

@Injectable({
  providedIn: 'root'
})
export class PlansRepositoryService implements PlanRepository {
  private plans = [
    new Plan('1', 'basico', 'Básico', { value: 10 }, { value: 100 }),
    new Plan('2', 'estandar', 'Estándar', { value: 15 }, { value: 150 }),
    new Plan('3', 'premium', 'Premium', { value: 20 }, { value: 200 }),
  ];

  constructor() { }
  findAllPlans(): Plan[] {
    return this.plans;
  }
}
