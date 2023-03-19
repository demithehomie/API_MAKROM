import { HttpService } from '@nestjs/axios';
export declare class ClienteController {
    private httpService;
    private readonly asaasApiUrl;
    constructor(httpService: HttpService);
    createCustomers(datacliente: any): Promise<any>;
    getCustomers(): Promise<any>;
    getCustomer(id: string): Promise<any>;
    deleteCustomer(id: string): Promise<any>;
    updateCustomer(id: string, datacliente: any): Promise<any>;
}
