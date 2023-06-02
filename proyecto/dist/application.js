"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoApplication = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const sequence_1 = require("./sequence");
// ---------- ADD IMPORTS -------------
const authentication_1 = require("@loopback/authentication");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const mongodb_datasource_1 = require("./datasources/mongodb.datasource");
class ProyectoApplication extends (0, boot_1.BootMixin)((0, service_proxy_1.ServiceMixin)((0, repository_1.RepositoryMixin)(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        // ------ ADD SNIPPET AT THE BOTTOM ---------
        // Mount authentication system
        this.component(authentication_1.AuthenticationComponent);
        // Mount jwt component
        this.component(authentication_jwt_1.JWTAuthenticationComponent);
        // Bind datasource
        // This is where your User data will be stored.
        this.dataSource(mongodb_datasource_1.MongodbDataSource, authentication_jwt_1.UserServiceBindings.DATASOURCE_NAME);
        // Bind the user service to the one in @loopback/authentication-jwt
        this.bind(authentication_jwt_1.UserServiceBindings.USER_SERVICE).toClass(authentication_jwt_1.MyUserService);
        // ------------- END OF SNIPPET -------------
    }
}
exports.ProyectoApplication = ProyectoApplication;
//# sourceMappingURL=application.js.map