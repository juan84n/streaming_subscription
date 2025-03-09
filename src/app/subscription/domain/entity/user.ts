import { UUIDValue } from "../value_object/uuid";

export class User {
  public id: UUIDValue;

  constructor(
    public name: string,
    public email: string,
    public password: string
  ){
    this.id = new UUIDValue(crypto.randomUUID());
  }
}
