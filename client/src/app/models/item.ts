import { Producto } from "./producto";

export class Item {
    public id!: number;
    public detalle: string = '';
    public producto!: Producto;

    setValues(data: any){
        this.id = data.id;
        this.detalle = data.detalle;
        this.producto = new Producto;
        this.producto.setValues(data.producto);
    }
    
}
