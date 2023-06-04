// import { Categoria } from './categoria';

export class Producto {
    public id!: number;
    public nombre: string = '';
    public precio: number = 0;
    public detalle: string = '';
    public categoria: number = 0;

    setValues(data: any){
        this.id = data.id;
        this.nombre = data.nombre;
        this.precio = data.precio;
        this.detalle = data.detalle;
        this.categoria = data.categoria;
    }

}
