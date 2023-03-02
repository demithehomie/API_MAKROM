"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoModule = void 0;
const dist_1 = require("@nestjs/axios/dist");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const pagament_controller_1 = require("./pagament.controller");
let PagamentoModule = class PagamentoModule {
};
PagamentoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            dist_1.HttpModule,
            config_1.ConfigModule
        ],
        controllers: [pagament_controller_1.PagamentoController],
        providers: [
            prisma_service_1.PrismaService
        ],
        exports: []
    })
], PagamentoModule);
exports.PagamentoModule = PagamentoModule;
//# sourceMappingURL=pagamento.module.js.map