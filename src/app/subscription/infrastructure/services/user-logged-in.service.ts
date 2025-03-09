import { Injectable, signal } from '@angular/core';
import { Subscription } from '@subscription/domain/entity/subscription';
import { User } from '@subscription/domain/entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedInService {
  private loggedIn = false;
  private subscription: Subscription | undefined
  constructor() { }

  setLoggedIn(loggedIn: boolean){
    this.loggedIn = loggedIn;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  setSubscription(subscription: Subscription | undefined){
    this.subscription = subscription;
  }

  getSubscription(){
    return this.subscription;
  }

}
