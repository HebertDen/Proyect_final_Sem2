"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'Mongodb',
    connector: 'mongodb',
    url: 'mongodb://root:1234@localhost:27017/facturacion',
    host: 'localhost',
    port: 27017,
    user: 'root',
    password: '1234',
    database: 'facturacion',
    useNewUrlParser: false
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MongodbDataSource = class MongodbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongodbDataSource.dataSourceName = 'Mongodb';
MongodbDataSource.defaultConfig = config;
MongodbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.Mongodb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MongodbDataSource);
exports.MongodbDataSource = MongodbDataSource;
//# sourceMappingURL=mongodb.datasource.js.map