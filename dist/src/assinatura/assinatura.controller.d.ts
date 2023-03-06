import { HttpService } from '@nestjs/axios';
export declare class AssinaturaController {
    private httpService;
    private readonly asaasApiUrl;
    constructor(httpService: HttpService);
    createSubscription(datacliente: any): Promise<any>;
    getSubscriptions(): Promise<any>;
    getSubscription(id: string): Promise<any>;
    getSubscriptionPays(id: string): Promise<any>;
    deleteSubscription(id: string): Promise<any>;
    updateSubscription(id: string, datacliente: any): Promise<any>;
}
