import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  getClient() {
    return this.client;
  }
}
