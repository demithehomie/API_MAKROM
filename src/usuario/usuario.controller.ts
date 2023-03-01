// import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { AuthService } from 'src/auth/auth.service';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { ResultadoDto } from 'src/dto/resultado.dto';
// import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
// import { UpdateUsuarioDto } from './dto/usuario.update.dto';
// import { Usuario } from './usuario.entity';
// import { UsuarioService } from './usuario.service';

// @Controller('usuario')
// export class UsuarioController {
//   constructor(private readonly usuarioService: UsuarioService,
//     private authService: AuthService) {}

//   //@UseGuards(JwtAuthGuard)
//   @Get('listar')
//   async listar(): Promise<Usuario[]>{
//       return this.usuarioService.listar()
//   }

//   @Post('cadastrar')
//   async cadastrar(@Body() data: UsuarioCadastrarDto): Promise<ResultadoDto>{    
//     return this.usuarioService.cadastrar(data)    
//   }

//   @UseGuards(AuthGuard('local'))
//   @Post('login')
//   async login(@Request() req) {
//     return this.authService.login(req.user);    
//   }

//   @Post('login-token')
//   async loginToken(@Request() @Body() data) {
//     return this.authService.loginToken(data.token);    
//   }
  
//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUsuarioDto) {
//     return this.usuarioService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usuarioService.remove(+id);
//   }
// }

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
