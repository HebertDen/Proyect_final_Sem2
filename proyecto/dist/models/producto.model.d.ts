import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    id: number;
    nombre: string;
    precio: number;
    detalle?: string;
    categoria_id: number;
    [prop: string]: any;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export type ProductoWithRelations = Producto & ProductoRelations;
