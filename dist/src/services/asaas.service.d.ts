import * as Asaas from 'asaas-node';
import { ConfigService } from '@nestjs/config';
export declare class AsaasService {
    private readonly configService;
    private readonly asaasApiUrl;
    private readonly asaasApiKey;
    private asaas;
    constructor(configService: ConfigService);
    getCustomers(): Promise<any>;
    createSubscription(customerId: string, planId: string): Promise<Asaas.Subscription>;
}
