import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Factura extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  hora: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  articulos: object[];

  @property({
    type: 'number',
    required: true,
  })
  subtotal: number;

  @property({
    type: 'number',
    required: true,
  })
  descuento: number;

  @property({
    type: 'number',
    required: true,
  })
  iva: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
