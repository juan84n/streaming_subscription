import { Period } from "../value_object/period";
import { Price } from "../value_object/price";
import { UUIDValue } from "../value_object/uuid";
import { Plan } from "./plan";
import { User } from "./user";

export class Subscription {
  public id: UUIDValue;
  public price: Price;
  public endDate: Date
  public isActive: boolean;
  public refund: Price = new Price(0);
  public nextSubscription: Subscription | undefined;

  constructor(
    public plan: Plan,
    public user: User,
    public period: Period,
    public startDate: Date,
  ){
    this.id = new UUIDValue(crypto.randomUUID());
    this.startDate = new Date();
    this.price = plan.calculatePrice(period);
    this.endDate = this.calculateEndDate(startDate, period);
    this.isActive = true;
    this.nextSubscription = undefined;

  }

  private calculateEndDate(startDate: Date, period: Period): Date {
    if (period === Period.Monthly) {
      return new Date(
        startDate.getFullYear(),
        startDate.getMonth() + 1,
        startDate.getDate()
      );
    }
    return new Date(
      startDate.getFullYear() + 1,
      startDate.getMonth(),
      startDate.getDate()
    );
  }

  private calculateCancellation(period: Period){
    const today = new Date();
    const daysToDivide = period === Period.Anual ? 365 : 30;
    if(this.compareDates(this.endDate, today)){
      const diff = this.getDiffBetweenDates(this.endDate, today, period);
      const pricePerDay = this.price.value / daysToDivide;
      const valueToRefund = pricePerDay * diff;
      this.refund = !this.refund ? new Price(valueToRefund)
      : new Price(this.refund.value + valueToRefund);
    }
  }

  private compareDates(date1: Date, date2: Date){
    const date1Updated = new Date(date1);
    date1Updated.setHours(0, 0, 0, 0);
    const date2Updated = new Date(date2);
    date2Updated.setHours(0,0,0,0);
    return date1Updated.getTime() > date2Updated.getTime();
  }

  private getDiffBetweenDates(date1: Date, date2: Date, period: number){
    const diffMiliseconds = Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24));
    if(period === Period.Monthly){
      return diffMiliseconds > 30 ? 30 : diffMiliseconds;
    }
    return diffMiliseconds;
  }

  update(plan: Plan, period: Period, startDate: Date){
    if(this.period === Period.Anual){
      const totalRefund = this.price.value - this.price.value;
      this.refund = new Price(this.refund.value + totalRefund);
    } else {
      if(this.compareDates(this.endDate, startDate)){
        this.nextSubscription = new Subscription(plan, this.user, period, this.endDate);
        this.nextSubscription.isActive = false;
      } else {
        this.plan = plan;
        this.price = plan.calculatePrice(period);
        this.period = period;
      }
    }
  }

  cancel(): Subscription{
    this.isActive = false;
    this.calculateCancellation(this.period);
    return this;
  }
}
