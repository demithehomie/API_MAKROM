import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as Asaas from 'asaas-node';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AsaasService {
  private readonly asaasApiUrl = 'https://www.asaas.com/api/v3';
  private readonly asaasApiKey: string;
  private asaas: Asaas;

  constructor(private readonly configService: ConfigService) {
    this.asaasApiKey = this.configService.get<string>('ASAAS_API_KEY');
    this.asaas = new Asaas({apiKey: this.asaasApiKey, apiVersion: 'v3'})
  }

  async getCustomers() {
    const url = `${this.asaasApiUrl}/customers`;
    const response = await axios.get(url, {
      headers: {
        access_token: this.asaasApiKey,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }

  async createSubscription(customerId: string, planId: string): Promise<Asaas.Subscription> {
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
}