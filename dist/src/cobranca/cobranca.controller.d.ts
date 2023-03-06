import { HttpService } from '@nestjs/axios';
export declare class CobrancaController {
    private httpService;
    private readonly asaasApiUrl;
    constructor(httpService: HttpService);
    createSubscription(datacliente: any): Promise<any>;
    getSubscription(): Promise<any>;
    deleteSubscription(id: string): Promise<any>;
    updateSubscription(id: string, datacliente: any): Promise<any>;
}
