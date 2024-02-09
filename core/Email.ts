import { createTransport, Transporter } from "nodemailer";
import { EmailBody } from "../components/sections/contact";

export default class EmailSender {
    private transporter?: Transporter
    constructor(private adressee: EmailBody)
    {

        this.transporter = createTransport({
            host: 'smtp.hostinger.com',
            secure: true,
            port: 465,
            auth: {
                user: "emailing@emailing.fastdatakeys.com",
                pass: "FastData@2023!"
            },
            tls: {
                rejectUnauthorized: false
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
                from: "emailing@emailing.fastdatakeys.com",
                to: "fdk@fdk-offshore.com",
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