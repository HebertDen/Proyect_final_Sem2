import { Item } from "./item";

export class Factura {
  public id!: string;
  public numero: number = 0;
  public fecha: string = "";
  public hora: string = "";
  public articulos: Array<Item> = [];
  public subtotal: number = 0;
  public descuento: number = 0;
  public iva: number = 0;
  public total: number = 0;

  setValues(data: any){
    this.id = data.id;
    this.numero = data.numero;
    this.fecha = data.fecha;
    this.hora = data.hora;
    this.articulos = data.articulos;
    this.subtotal = data.subtotal;
    this.descuento = data.descuento;
    this.iva = data.iva;
    this.total = data.total;
  }

}
