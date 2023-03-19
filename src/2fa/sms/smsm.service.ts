import { Injectable } from '@nestjs/common';
import * as request from 'request-promise-native';

@Injectable()
export class SmsMobileService {
  async sendVerificationCode(phoneNumber: string, verificationCode: number) {
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

      // Envie a mensagem de texto usando a API do SMS Mobile
      const response = await request(options);

      if (response.code !== 200) {
        throw new Error(`Erro ao enviar SMS para ${phoneNumber}: ${response.message}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}
