/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IonicCorsMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');

        if(req.method === 'OPTIONS'){
            res.sendStatus(200)
        } else {
            next();
        }
    }

}

