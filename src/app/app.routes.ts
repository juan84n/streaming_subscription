import { Routes } from '@angular/router';
import { HomeComponent } from '@subscription/views/home/home.component';
import { ListSubscriptionsComponent } from '@subscription/views/list-subscriptions/list-subscriptions.component';
import { LoginComponent } from '@subscription/views/login/login.component';
import { SubscriptionComponent } from '@subscription/views/subscription/subscription.component';
import { UpdateSubscriptionComponent } from '@subscription/views/update-subscription/update-subscription.component';
import { ViewSubscriptionComponent } from '@subscription/views/view-subscription/view-subscription.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Streaming Subscription',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Streaming Subscription',
  },
  {
    path: 'subscription/create',
    component: SubscriptionComponent,
    title: 'Streaming Subscription',
  },
  {
    path: 'subscription/update',
    component: UpdateSubscriptionComponent,
    title: 'Streaming Subscription',
  },
  {
    path: 'subscription/view-subscription',
    component: ViewSubscriptionComponent,
    title: 'Streaming Subscription',
  },
  {
    path: 'subscription/list-subscriptions',
    component: ListSubscriptionsComponent,
    title: 'Streaming Subscription',
  },
];
