import { ChangeEventHandler, Dispatch, FormEventHandler, LegacyRef, SetStateAction, forwardRef, useContext, useState } from "react";
import { ClassnamesContext } from "../contexts";

export type EmailBody = {
    email: string,
    message: string
}

export const Contact = forwardRef((props, ref:LegacyRef<HTMLElement>)=>{

    const [isLoading, setIsLoading]: [
        isLoading: boolean, 
        setIsLoading: Dispatch<SetStateAction<boolean>>
    ] = useState(false);

    const [formBody, setFormBody]: [
        formBody: EmailBody, 
        setFormBody: Dispatch<SetStateAction<EmailBody>>
    ] = useState({
        email: "",
        message: ""
    });

    const classnames = useContext(ClassnamesContext);

    const handleSendMail: FormEventHandler = (e)=>{
        e.preventDefault();

        setIsLoading(true);

        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: formBody.email,
                message: formBody.message
            })
        }).then(res => {
            //setIsLoading(false);
            console.log(res)
        }).catch(err => {
            setIsLoading(false);
            console.error(err)
        });
    }

    const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = e => {
        setFormBody(fb => {
            return {...fb, email: e.target.value}
        });
    }

    const handleChangeMessage: ChangeEventHandler<HTMLTextAreaElement> = e => {
        setFormBody(fb => {
            return {...fb, message: e.target.value}
        });
    }

    return <section ref={ref} id="contact" className={"px-4 flex-md-row " + classnames.contact}  style={{marginBottom: "100px"}}>
        <h2 style={{marginBottom: "48px"}} className="text-light text-center">Nous contacter</h2>
        <div className="d-flex justify-content-between flex-wrap">
            <div className="text-light w-50">
                <p className="border text-light p-2 rounded shadow-sm">Vous avez une question, un projet en tête ou simplement envie de dire bonjour ?</p>
                <p className="border text-light p-2 rounded shadow-sm">N’hésitez pas à nous contacter !</p>
                <p className="border text-light p-2 rounded shadow-sm">Nous sommes toujours ravis d’entendre de nouvelles idées et de rencontrer de nouvelles personnes.</p>
                <p className="border text-light p-2 rounded shadow-sm">Vous pouvez également nous contacter directement en remplissant le formilaire suivant.</p>
                <p className="border text-light p-2 rounded shadow-sm">Merci de votre intérêt et nous avons hâte de vous entendre !</p>
                <p className="border text-light p-2 rounded shadow-sm">Cordialement</p>
            </div>
            <form action="" style={{width: "40%"}} onSubmit={handleSendMail}>
                <h5 className="form-label text-light">Vous avez un projet ? Parlez-nous en !</h5>
                <div className="form-group">
                    <label htmlFor="">Adresse email</label>
                    <input onChange={handleChangeEmail} type="email" name="email" className="form-control" placeholder="example@email.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Message</label>
                    <textarea onChange={handleChangeMessage} name="message" className="form-control" id="" placeholder="Ecrire quelque chose"></textarea>
                </div>
                <button className="btn btn-primary text-light mt-4">Envoyer le message 
                    {isLoading && <div className="lds-loader">
                        <div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div>
                    </div>}
                </button>
            </form>
        </div>
    </section>
});