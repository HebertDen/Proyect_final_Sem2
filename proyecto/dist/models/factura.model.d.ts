import { Entity } from '@loopback/repository';
export declare class Factura extends Entity {
    id?: string;
    fecha: string;
    articulos: object[];
    subtotal: string;
    descuento: string;
    iva: string;
    [prop: string]: any;
    constructor(data?: Partial<Factura>);
}
export interface FacturaRelations {
}
export type FacturaWithRelations = Factura & FacturaRelations;
