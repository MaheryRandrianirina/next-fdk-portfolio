import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import EmailSender from "../../core/Email";
import { EmailBody } from "../../components/sections/contact";

const Contact: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse)=>{
    try {
        const emailSender = new EmailSender(req.body as EmailBody);
        await emailSender.send();

        res.json({
            success: true,
            message: "Votre message a bien été réçu. Nous vous repondrons dans les plus bref délais."
        });
    }catch(e){
        res.status(400).json({
            success: false,
            error: e,
            message: "Message non envoyé. Veuillez réessayer plutard."
        });
    }
    
}

export default Contact;