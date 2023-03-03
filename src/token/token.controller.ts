import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('token')
export class TokenController {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

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
