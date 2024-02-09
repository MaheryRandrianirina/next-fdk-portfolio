import { LegacyRef, forwardRef, useContext } from "react";
import { ClassnamesContext } from "../contexts";

export const Contact = forwardRef((props, ref:LegacyRef<HTMLElement>)=>{

    const classnames = useContext(ClassnamesContext);

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
            <form action="" style={{width: "40%"}}>
                <h5 className="form-label text-light">Vous avez un projet ? Contactez-nous !</h5>
                <div className="form-group">
                    <label htmlFor="">Adresse email</label>
                    <input type="email" name="email" className="form-control" placeholder="example@email.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Message</label>
                    <textarea name="message" className="form-control" id="" placeholder="Ecrire quelque chose"></textarea>
                </div>
                <button className="btn btn-primary text-light mt-4">Envoyer le message</button>
            </form>
        </div>
    </section>
});