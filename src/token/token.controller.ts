import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('token')
export class TokenController {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // @Post()
  // async save(@Body() hash: string, email: string) {
  //   let objToken = await this.prisma.getClient().token.findUnique({ where: { email }  });
  //   if (objToken){
  //     this.prisma.getClient().token.update({
  //       where: {email},
  //       data: { hash }
  //     });
  //   }else{
  //     this.prisma.getClient().token.create({
  //       data: { email, hash }
  //     })
  //   }
  // }

  @Post()
  async save(@Body() hash: string, email: string) {
    const upsertUser = await this.prisma.getClient().token.upsert({
      where: {
        email,
      },
      update: {
        hash,
      },
      create: {
        email: email,
        hash: hash,
      },
    })
  }
}
