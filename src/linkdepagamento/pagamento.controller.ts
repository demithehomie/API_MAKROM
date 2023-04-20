import axios from 'axios';
import { Controller, Post, Body, Get, Delete, Param, Put } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

require('dotenv').config();

const ASAAS_API_KEY = process.env.ASAAS_API_KEY;

@Controller('paymentLinks')
export class PagamentoController {

  private readonly asaasApiUrl = 'https://sandbox.asaas.com/api/v3';

  constructor(private httpService: HttpService) {}

    @Post()
    async createSubscription(@Body() datacliente: any): Promise<any> {
      const url = `${this.asaasApiUrl}/paymentLinks`;
      const headers = {  access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
      const response = await axios.post(url, datacliente, { headers });
      return response.data;
    }

    @Get()
    async getSubscription() {
      const url = `${this.asaasApiUrl}/paymentLinks`;
      const headers = {  access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
      const response = await axios.get(url, {headers});
      return response.data;
    }

    @Delete(':id')
    async deleteSubscription(@Param('id') id: string): Promise<any> {
      const url = `${this.asaasApiUrl}/paymentLinks`;
      const headers = {  access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
      const response = await axios.delete(url + `/${id}`, {headers});
      return response.data;
    }

    @Put(':id')
    async updateSubscription(@Param('id') id: string, @Body() datacliente: any): Promise<any> {
      const url = `${this.asaasApiUrl}/paymentLinks`;
      const headers = {  access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
      const response = await axios.put(url + `/${id}`, datacliente, {headers});
      return response.data;
    }
}