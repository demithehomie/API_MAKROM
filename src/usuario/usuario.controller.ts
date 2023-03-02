import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    const users = await this.prisma.getClient().usuario.findMany();
    return users;
  }

  @Post()
  async create(@Body() data: { email: string, senha: string}) {
    const user = await this.prisma.getClient().usuario.create({
      data: {
        email: data.email,
        senha: bcrypt.hashSync(data.senha, 8),
      },
    });
    return user;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: { senha: string, email: string }) {
    const user = await this.prisma.getClient().usuario.update({
      where: {
        id: parseInt(id),
      },
      data: {
        email: data.email,
        senha: bcrypt.hashSync(data.senha, 8),
      },
    });
    return user;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.prisma.getClient().usuario.delete({
      where: {
        id: parseInt(id),
      },
    });
    return user;
  }
  
}
