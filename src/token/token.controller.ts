import { Controller, Post, Body } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Controller('token')
export class TokenController {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  @Post()
  async create(@Body() data: { email: string, hash: string}) {
    const token = await this.prisma.getClient().token.create({
      data: {
        email: data.email,
        hash: bcrypt.hashSync(data.hash, 8),
      },
    });
    return token;
  }

}
