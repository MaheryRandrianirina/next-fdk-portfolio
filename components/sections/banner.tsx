import { LegacyRef, forwardRef } from "react";
import { ProgrammingSvg } from "../svg/ProgrammingSvg";
import { PrimaryButton } from "../buttons";


export const Banner = forwardRef((props, ref: LegacyRef<HTMLElement>)=>{
    return <section ref={ref} id="banner" className="bg-dark d-md-flex justify-content-between align-items-center" style={{marginBottom: "48px"}}>
        <div className="ms-2">
            <div style={{width: "350px"}} className="mx-sm-auto my-sm-0 intro">
                <h1 className="text-light" style={{marginBottom: "24px"}}>Mahery Randrianirina - Développeur Fullstack PHP & Javascript</h1>
                <p className="text-light" style={{marginBottom: "24px"}}>
                    Du code propre, des designs captivants, des solutions innovantes.
                    <span className="text-bold">Créons ensemble des sites et applications web qui marquent les esprits.</span>
                </p>
                <PrimaryButton className="cta">
                    <a href="#contact" className="text-light text-decoration-none">Me contacter</a>
                </PrimaryButton> 
            </div>           
        </div>
        <ProgrammingSvg/>
    </section>
})
