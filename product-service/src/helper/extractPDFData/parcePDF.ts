import fs from "fs";
import pdf_parse from "pdf-parse";
import { IPdfDetails } from "../../interface/product.interface";
import Server from "../../server";

export default class ParcePDF {

    static async getPDFDetails(file: Express.Multer.File){
        
        const bufferData = fs.readFileSync(file.path);
        const pdfData = await pdf_parse(bufferData)

        /*Extricting row text details from pdf */
        
        const pdfText = pdfData.text;
        /*------------------Here I'm manually extracting the details of PDF through Regex*/
            //    let pdfDetails: IPdfDetails = {
            //        invoice_date: text.match(/Invoice Date:\s*(.*)/)?.[1] || '',
            //        invoice_number: text.match(/Invoice Number:\s*(.*)/)?.[1] || '',
            //        user: text.match(/User:\s*(.*)/)?.[1] || '',
            //        mail: text.match(/Email:\s*(.*)/)?.[1] || '',
            //        state: text.match(/State:\s*(.*)/)?.[1] || '',
            //        country: text.match(/Country:\s*(.*)/)?.[1] || '',
            //        file_name: file.filename
            //    };
        const prompt = `
        Extract the following details from the provided text and return them as a valid JSON object:
        - Name
        - Email
        - Invoice Number
        - Invoice Date
        - State
        - Country

        Here is the text:
        ${pdfText}
        `;
         const result = await Server.model.generateContent(prompt);
         const response = await result.response;

         console.log("here Printing pdf details as text",response.text());

       return  JSON.parse(response.text().replace(/```json/g, '').replace(/```/g, ''));

    }

}