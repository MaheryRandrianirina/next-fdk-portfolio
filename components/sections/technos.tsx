import { LegacyRef, forwardRef, useContext } from "react";
import { HTML } from "../svg/html";
import { CSS } from "../svg/css";
import { PHP } from "../svg/php";
import { JS } from "../svg/js";
import { WP } from "../svg/wp";
import { Laravel } from "../svg/laravel";
import { React } from "../svg/react";
import { NodeJs } from "../svg/nodejs";
import { Next } from "../svg/next";
import { ClassnamesContext } from "../contexts";

export const Technos = forwardRef((props, ref: LegacyRef<HTMLElement>)=>{
    
    const classnames = useContext(ClassnamesContext);
    
    return <section style={{marginBottom: "100px"}} id="technologies" className={"px-4"} ref={ref}>
        <h2 className={"title text-center text-light " + (classnames.technos)} style={{marginBottom: "24px"}}>Technologies</h2>
        <div className="d-md-flex justify-content-between align-items-center">
            <div className="mx-auto mt-0 text-light col-12 col-md-6 text-center text-md-left">
                <p className={"description " + (classnames.technos)}>
                    <span>Passionnés par la résolution de problèmes</span>
                    <span>et le développement web, nous maîtrisons </span> 
                    <span>une gamme de technologies modernes.</span>
                    <span>Notre objectif est de créer des sites web intuitifs</span>
                    <span>et dynamiques qui offrent une expérience</span>
                    <span>utilisateur exceptionnelle.</span>
                </p>
            </div>
            <div className="list col-12 col-md-6 mx-sm-auto my-sm-0">
                <div className="first d-flex justify-content-center mb-2">
                    <div className={"d-flex justify-content-center border techno align-items-center me-2 " + (classnames.technos)}>
                        <HTML/><p className="text-light mb-0 ms-1">HTML</p>
                    </div>
                    <div className={"d-flex justify-content-center border techno align-items-center me-2 " + (classnames.technos)}>
                        <CSS/><p className="text-light mb-0 ms-1">CSS</p>
                    </div>
                </div>
                <div className="second d-flex justify-content-center mb-2 flex-wrap">
                    <div className={"d-flex justify-content-center border techno align-items-center me-2 " + (classnames.technos)}>
                        <PHP/><p className="text-light mb-0 ms-1">PHP</p>
                    </div>
                    <div className={"d-flex justify-content-center border techno align-items-center me-2 " + (classnames.technos)}>
                        <JS/><p className="text-light mb-0 ms-1">JS</p>
                    </div>
                    <div className={"d-flex justify-content-center border techno align-items-center me-2 " + (classnames.technos)}>
                        <WP/><p className="text-light mb-0 ms-1">Wordpress</p>
                    </div>
                    <div className={"d-flex justify-content-center mt-2 border techno align-items-center me-2 " + (classnames.technos)}>
                        <Laravel/><p className="text-light mb-0 ms-1">Laravel</p>
                    </div>
                </div>
                <div className="third d-flex justify-content-center">
                    <div className={"d-flex justify-content-center border techno align-items-center me-2 " + (classnames.technos)}>
                        <React/><p className="text-light mb-0 ms-1">React</p>
                    </div>
                    <div className={"d-flex justify-content-center border techno align-items-center me-2 " + (classnames.technos)}>
                        <NodeJs/><p className="text-light mb-0 ms-1">Node.Js</p>
                    </div>
                    <div className={"d-flex justify-content-center border techno align-items-center me-2 " + (classnames.technos)}>
                        <Next/><p className="text-light mb-0 ms-1">Next.Js</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
});