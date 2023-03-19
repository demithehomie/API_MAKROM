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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const smsm_service_1 = require("../2fa/sms/smsm.service");
let AuthController = class AuthController {
    constructor(authService, smsMobileService) {
        this.authService = authService;
        this.smsMobileService = smsMobileService;
    }
    async login(credentials) {
        const user = await this.authService.validateUser(credentials.username, credentials.password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const verificationCode = Math.floor(1000 + Math.random() * 9000);
        await this.smsMobileService.sendVerificationCode(user.phone, verificationCode);
        return { message: 'Um código de verificação foi enviado para o seu telefone celular.' };
    }
    async verify(verificationData) {
        const isVerified = await this.authService.validateUser(verificationData.username, verificationData.code);
        if (!isVerified) {
            throw new common_1.UnauthorizedException();
        }
        const token = await this.authService.generateToken(verificationData.username);
        return { access_token: token };
    }
};
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('verify'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verify", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        smsm_service_1.SmsMobileService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map