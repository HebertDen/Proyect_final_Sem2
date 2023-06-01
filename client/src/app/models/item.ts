export class Item {
  public id!: number;
  public cantidad: number = 0;
  public detalle: string = '';
  public valor_unitario: number = 0;
  public importe: number = 0;

  setValues(data: any) {
    this.id = data.id;
    this.cantidad = data.cantidad;
    this.detalle = data.detalle;
    this.valor_unitario = data.valor_unitario;
    this.importe = data.importe;
  }

}
