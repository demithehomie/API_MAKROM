import { Controller, Post, Body } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { emit } from 'process';
import { Token } from '@prisma/client';

@Controller('token')
export class TokenController {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // @Post()
  // async create(data: { email: string, hash: string}) {
  //   const token = await this.prisma.getClient().token.create({
  //     data: {
  //       email: data.email,
  //       hash: bcrypt.hashSync(data.hash, 8),
  //     },
  //   });
  //   return token;
  // }

  @Post()
  async create(email: string, hash: string) {
    let objToken = await this.prisma.getClient().token.findUnique({ where: { email }  });
    if (objToken){
      this.prisma.getClient().token.update({
        where: {email},
        data: { email },
        
      });
    }else{
      this.prisma.getClient().token.create({
        data: { email, hash }
      })
    }
  }

  
}
