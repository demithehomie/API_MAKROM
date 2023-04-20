import * as PDFDocument from 'pdfkit';

export class PDFService {
  generatePDF(): PDFDocument {
    // Cria um novo documento PDF
    const doc = new PDFDocument();
    
    // Escreve o conteúdo no PDF
    doc.fontSize(14).text('Olá, Mundo!');
    
    // Retorna o documento PDF gerado
    return doc;
  }
} //
