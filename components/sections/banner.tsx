import { LegacyRef, forwardRef } from "react";
import { ProgrammingSvg } from "../svg/ProgrammingSvg";
import { PrimaryButton } from "../buttons";


export const Banner = forwardRef((props, ref: LegacyRef<HTMLElement>)=>{
    return <section ref={ref} id="banner" className="bg-dark d-md-flex justify-content-between align-items-center" style={{marginBottom: "48px", paddingTop: "60px"}}>
        <div className="ms-2 w-md-50">
            <div style={{width: "350px"}} className="mx-sm-auto my-sm-0 ">
                <h1 className="text-light" style={{marginBottom: "24px"}}>FDK - Fast Data Keys</h1>
                <p className="text-light" style={{marginBottom: "24px"}}>
                    Du code propre, des designs captivants, des solutions innovantes.
                    <span className="text-bold">Créons ensemble des sites web qui marquent les esprits.</span>
                </p>
                <PrimaryButton className="cta">
                    <a href="#contact" className="text-light text-decoration-none">Nous contacter</a>
                </PrimaryButton> 
            </div>           
        </div>
        <ProgrammingSvg/>
    </section>
})