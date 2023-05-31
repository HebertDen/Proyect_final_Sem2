import { Entity } from '@loopback/repository';
export declare class Factura extends Entity {
    id?: string;
    num_fact: number;
    fecha: string;
    articulos: object[];
    subtotal: number;
    descuento: number;
    iva: number;
    total: number;
    [prop: string]: any;
    constructor(data?: Partial<Factura>);
}
export interface FacturaRelations {
}
export type FacturaWithRelations = Factura & FacturaRelations;
