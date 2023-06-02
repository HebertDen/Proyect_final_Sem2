import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Factura, FacturaRelations } from '../models';
export declare class FacturaRepository extends DefaultCrudRepository<Factura, typeof Factura.prototype.Id, FacturaRelations> {
    constructor(dataSource: MongodbDataSource);
}
