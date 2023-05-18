import { Categoria } from './categoria';

export class Producto {
    public id!: number;
    public nombre: string = '';
    public precio: number = 0;
    public detalle: string = '';
    public categoria!: Categoria;

    setValues(data: any){
        this.id = data.id;
        this.nombre = data.nombre;
        this.precio = data.precio;
        this.detalle = data.detalle;
        this.categoria = new Categoria;
        this.categoria.setValues(data.categoria);
    }

}
