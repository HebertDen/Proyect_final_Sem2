import { Entity } from '@loopback/repository';
export declare class Categoria extends Entity {
    Id?: number;
    Nombre: string;
    [prop: string]: any;
    constructor(data?: Partial<Categoria>);
}
export interface CategoriaRelations {
}
export type CategoriaWithRelations = Categoria & CategoriaRelations;
