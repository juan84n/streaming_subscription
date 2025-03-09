export class UUIDValue {

  private readonly id;

  constructor(id: string){
    this.id = id;
  }

  getId(){
    return this.id;
  }
}
