"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsMobileService = void 0;
const common_1 = require("@nestjs/common");
const request = require("request-promise-native");
let SmsMobileService = class SmsMobileService {
    async sendVerificationCode(phoneNumber, verificationCode) {
        try {
            const options = {
                method: 'POST',
                uri: 'https://api.smsmobile.com.br/send',
                form: {
                    apikey: process.env.SMS_MOBILE_API_KEY,
                    number: phoneNumber,
                    message: `Seu código de verificação é ${verificationCode}`,
                },
                json: true,
            };
            const response = await request(options);
            if (response.code !== 200) {
                throw new Error(`Erro ao enviar SMS para ${phoneNumber}: ${response.message}`);
            }
        }
        catch (error) {
            console.error(error.message);
        }
    }
};
SmsMobileService = __decorate([
    (0, common_1.Injectable)()
], SmsMobileService);
exports.SmsMobileService = SmsMobileService;
//# sourceMappingURL=smsm.service.js.map