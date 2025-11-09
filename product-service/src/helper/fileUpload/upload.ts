import multer from "multer";
import path from "path";
import { Request } from "express";

export default class FileUpload {

    static storage = multer.diskStorage({

        destination: (req:Request,file,cb)=>{
            cb(null, path.join(__dirname, '../../../uploads'));
        },
        filename: (req:Request,file,cb) =>{
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    })

    static filter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed!'));
        }
    }

    static upload = multer({
        storage: this.storage,
        fileFilter: this.filter,
        limits: { fileSize: 2 * 1024 * 1024 } // 2 MB limit
    }).single('pdfFile'); // 'pdfFile' is the name of the form field for the PDF file

}
