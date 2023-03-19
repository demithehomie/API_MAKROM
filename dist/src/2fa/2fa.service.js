"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwofaService = void 0;
const common_1 = require("@nestjs/common");
const usuario_controller_1 = require("../usuario/usuario.controller");
const otplib_1 = require("otplib");
const config_1 = require("@nestjs/config");
let TwofaService = class TwofaService {
    constructor(usuarioCtrl, configService) {
        this.usuarioCtrl = usuarioCtrl;
        this.configService = configService;
    }
    async gerarSecret2fa(user) {
        const _id = null;
        const secret = otplib_1.authenticator.generateSecret();
        const otpAuthUrl = otplib_1.authenticator.keyuri(user.email, this.configService.get('TWO_FACTOR_AUTHENTICATION_APP_NAME'), secret);
        await this.usuarioCtrl.setTwoFactorAuthenticationSecret(secret, user, _id);
        return {
            secret,
            otpAuthUrl,
        };
    }
};
TwofaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_controller_1.UsuarioController,
        config_1.ConfigService])
], TwofaService);
exports.TwofaService = TwofaService;
//# sourceMappingURL=2fa.service.js.map