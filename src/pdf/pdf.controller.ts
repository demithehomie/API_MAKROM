import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PDFService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PDFService) {}

  @Get()
  async generatePdf(@Res() res: Response): Promise<void> {
    // Obtém o documento PDF gerado do serviço PDFService
    const doc = this.pdfService.generatePDF();
    
    // Define o nome do arquivo PDF gerado
    res.setHeader('Content-Disposition', 'attachment; filename="exemplo.pdf"');
    
    // Define o tipo de conteúdo como PDF
    res.setHeader('Content-Type', 'application/pdf');
    
    // Stream o documento PDF para a resposta da API
    doc.pipe(res);
    
    // Finaliza o documento PDF
    doc.end();
  }
}
