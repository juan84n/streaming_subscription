import { Period } from "../value_object/period";
import { Price } from "../value_object/price";

export class Plan {
  constructor(
    public id: string,
    public name: string,
    public label: string,
    public monthlyPrice: Price,
    public anualPrice: Price
  ) {}

  calculatePrice(period: number): Price {
    if (period === Period.Anual) {
      const descuento = this.anualPrice.value * 0.1;
      return new Price(this.anualPrice.value - descuento);
    }
    return this.monthlyPrice;
  }
}
