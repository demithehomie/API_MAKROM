"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ionic_cors_middleware_1 = require("../middlewares/ionic-cors.middleware");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const assinatura_module_1 = require("./assinatura/assinatura.module");
const auth_module_1 = require("./auth/auth.module");
const cliente_module_1 = require("./cliente/cliente.module");
const cobranca_module_1 = require("./cobranca/cobranca.module");
const pagamento_module_1 = require("./linkdepagamento/pagamento.module");
const prisma_service_1 = require("./prisma/prisma.service");
const asaas_service_1 = require("./services/asaas.service");
const usuario_module_1 = require("./usuario/usuario.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(ionic_cors_middleware_1.IonicCorsMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            assinatura_module_1.AssinaturaModule,
            cliente_module_1.ClienteModule,
            cobranca_module_1.CobrancaModule,
            config_1.ConfigModule,
            pagamento_module_1.PagamentoModule,
            usuario_module_1.UsuarioModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, asaas_service_1.AsaasService, ionic_cors_middleware_1.IonicCorsMiddleware],
        exports: [prisma_service_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map