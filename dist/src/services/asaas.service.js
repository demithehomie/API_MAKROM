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
exports.AsaasService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const Asaas = require("asaas-node");
const config_1 = require("@nestjs/config");
let AsaasService = class AsaasService {
    constructor(configService) {
        this.configService = configService;
        this.asaasApiUrl = 'https://www.asaas.com/api/v3';
        this.asaasApiKey = this.configService.get('ASAAS_API_KEY');
        this.asaas = new Asaas({ apiKey: this.asaasApiKey, apiVersion: 'v3' });
    }
    async getCustomers() {
        const url = `${this.asaasApiUrl}/customers`;
        const response = await axios_1.default.get(url, {
            headers: {
                access_token: this.asaasApiKey,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
    async createSubscription(customerId, planId) {
        const subscription = await this.asaas.subscriptions.create({
            customer: customerId,
            billingType: 'AUTO',
            nextDueDate: new Date().toISOString(),
            value: 99.99,
            cycle: 'MONTHLY',
            description: 'Descrição da assinatura',
            discount: {
                value: 10.0,
                dueDateLimitDays: 5
            },
            fine: {
                value: 5.0,
                percentage: 2.0
            },
            interest: {
                value: 2.0,
                percentage: 1.5
            },
            creditCard: {
                holderName: 'Nome do titular do cartão',
                number: '4111111111111111',
                expirationMonth: '12',
                expirationYear: '2022',
                ccv: '123'
            },
            debitCard: {
                holderName: 'Nome do titular do cartão',
                number: '4111111111111111',
                expirationMonth: '12',
                expirationYear: '2022',
                ccv: '123'
            },
            plan: planId
        });
        return subscription;
    }
};
AsaasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AsaasService);
exports.AsaasService = AsaasService;
//# sourceMappingURL=asaas.service.js.map