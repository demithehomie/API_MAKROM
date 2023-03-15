// import { Injectable, Inject, HttpException, HttpStatus, forwardRef } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { Token } from './token.entity';
// import { UsuarioService } from 'src/usuario/usuario.service';
// import { AuthService } from 'src/auth/auth.service';
// import { Usuario } from 'src/usuario/usuario.entity';

// @Injectable()
// export class TokenService {
//   constructor(
//     @Inject('TOKEN_REPOSITORY')
//     private tokenRepository: Repository<Token>,
//     private usuarioService: UsuarioService,
//     @Inject(forwardRef(() => AuthService))
//     private authService: AuthService
//   ) {}

//   async save(hash: string, email: string){
//     let objToken = await this.tokenRepository.findOne({email: email})
//     if (objToken){
//       this.tokenRepository.update(objToken.id, {
//         hash: hash
//       })
//     }else{
//       this.tokenRepository.insert({
//         hash: hash,
//         email: email
//       })
//     }
//   }

//   async refreshToken(oldToken: string){
//     let objToken = await this.tokenRepository.findOne({ hash: oldToken })
//     if (objToken){
//       let email = await this.usuarioService.findOne(objToken.email)      
//       return this.authService.login(email)
//     }else{
//       return new HttpException({
//         errorMessage: 'Token inválido'
//       }, HttpStatus.UNAUTHORIZED)
//     }
//   }

//   async getUsuarioByToken(token: string): Promise<Usuario>{
//     token = token.replace("Bearer ","").trim()
//     let objToken: Token = await this.tokenRepository.findOne({hash: token})
//     if (objToken){
//       let usuario = await this.usuarioService.findOne(objToken.email)      
//       return usuario
//     }else{
//       return null
//     }
//   }

//   async getToken(): Promise<Token[]> {
//     return this.tokenRepository.find();
//   }
// }