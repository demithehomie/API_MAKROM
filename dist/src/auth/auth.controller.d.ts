import { AuthService } from './auth.service';
import { SmsMobileService } from 'src/2fa/sms/smsm.service';
export declare class AuthController {
    private readonly authService;
    private readonly smsMobileService;
    constructor(authService: AuthService, smsMobileService: SmsMobileService);
    login(credentials: any): Promise<{
        message: string;
    }>;
    verify(verificationData: any): Promise<{
        access_token: void;
    }>;
}
