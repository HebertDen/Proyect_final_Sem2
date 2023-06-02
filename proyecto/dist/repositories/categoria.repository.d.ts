import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Categoria, CategoriaRelations } from '../models';
export declare class CategoriaRepository extends DefaultCrudRepository<Categoria, typeof Categoria.prototype.Id, CategoriaRelations> {
    constructor(dataSource: MysqlDataSource);
}
