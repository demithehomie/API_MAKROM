import { AuthService } from 'src/auth/auth.service';
declare const TwoFactorStrategy_base: new (...args: any[]) => any;
export declare class TwoFactorStrategy extends TwoFactorStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(token: string, user: any): Promise<any>;
}
export {};
