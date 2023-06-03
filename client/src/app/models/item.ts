export class Item {
  public cantidad: number = 0;
  public detalle: string = '';
  public valor_unitario: number = 0;
  public importe: number = 0;

  setValues(data: any) {
    this.cantidad = data.cantidad;
    this.detalle = data.detalle;
    this.valor_unitario = data.valor_unitario;
    this.importe = data.importe;
  }

}
