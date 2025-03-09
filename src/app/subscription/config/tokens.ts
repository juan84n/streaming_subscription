import { InjectionToken } from '@angular/core';
import { SubscriptionRepository } from '@subscription/domain/repository/subscriptionRepository';

export const SUBSCRIPTION_REPOSITORY = new InjectionToken<SubscriptionRepository>('SubscriptionRepository');
