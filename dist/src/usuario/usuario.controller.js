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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("../auth/auth.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let UsuarioController = class UsuarioController {
    constructor(prisma, authService, usuarioRepository) {
        this.prisma = prisma;
        this.authService = authService;
        this.usuarioRepository = usuarioRepository;
    }
    async findAll() {
        const users = await this.prisma.getClient().usuario.findMany();
        return users;
    }
    async create(data) {
        const user = await this.prisma.getClient().usuario.create({
            data: {
                email: data.email,
                senha: bcrypt.hashSync(data.senha, 8),
            },
        });
        return user;
    }
    async update(id, data) {
        const user = await this.prisma.getClient().usuario.update({
            where: {
                id: parseInt(id),
            },
            data: {
                email: data.email,
                senha: bcrypt.hashSync(data.senha, 8),
            },
        });
        return user;
    }
    async delete(id) {
        const user = await this.prisma.getClient().usuario.delete({
            where: {
                id: parseInt(id),
            },
        });
        return user;
    }
    async login(req) {
        return this.authService.login(req.user);
    }
    async setTwoFactorAuthenticationSecret(secret, user, _id) {
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('listar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('cadastrar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "login", null);
UsuarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        auth_service_1.AuthService,
        prisma_service_1.PrismaService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map