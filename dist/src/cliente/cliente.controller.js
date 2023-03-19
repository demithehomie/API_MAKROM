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
exports.ClienteController = void 0;
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
const axios_2 = require("@nestjs/axios");
require('dotenv').config();
const ASAAS_API_KEY = process.env.ASAAS_API_KEY;
let ClienteController = class ClienteController {
    constructor(httpService) {
        this.httpService = httpService;
        this.asaasApiUrl = 'https://www.asaas.com/api/v3';
    }
    async createCustomers(datacliente) {
        const url = `${this.asaasApiUrl}/customers`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.post(url, datacliente, { headers });
        return response.data;
    }
    async getCustomers() {
        const url = `${this.asaasApiUrl}/customers`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.get(url, { headers });
        return response.data;
    }
    async getCustomer(id) {
        const url = `${this.asaasApiUrl}/customers`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.get(url + `/${id}`, { headers });
        return response.data;
    }
    async deleteCustomer(id) {
        const url = `${this.asaasApiUrl}/customers`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.delete(url + `/${id}`, { headers });
        return response.data;
    }
    async updateCustomer(id, datacliente) {
        const url = `${this.asaasApiUrl}/customers`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.post(url + `/${id}`, datacliente, { headers });
        return response.data;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "createCustomers", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getCustomers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getCustomer", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "deleteCustomer", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "updateCustomer", null);
ClienteController = __decorate([
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [axios_2.HttpService])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map