import { createTransport, Transporter } from "nodemailer";
import { EmailBody } from "../components/sections/contact";

export default class EmailSender {
    private transporter?: Transporter
    constructor(private adressee: EmailBody)
    {

        this.transporter = createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        }); 
    }

    async send()
    {
        return new Promise((resolve, reject)=>{
            if(this.transporter === undefined){
                reject(new Error("transporter n'est pas defini"));

                return;
            }

            const messageHtml = `
                <div>
                    <p>${this.adressee.email}</p>
                    <p>${this.adressee.message}</p>
                </div>
            `;

            const transporter = this.transporter as Transporter;
            transporter.sendMail({
                from: process.env.SMTP_USER,
                to: process.env.SMTP_TO_ADRESS,
                subject: "Contact prospect",
                text: "Envoyeur : " + this.adressee.email + ". Message : " + this.adressee.message,
                html: messageHtml
            }, async(err, info)=>{
                if(err) {
                    reject(err);
                }else {
                    resolve(true);
                }
            })
        });
    }
}
