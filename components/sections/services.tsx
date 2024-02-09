import { CSSProperties, FC, LegacyRef, PropsWithChildren, forwardRef, useContext } from "react";
import { ClassnamesContext } from "../contexts";

export const ServicesSection = forwardRef((props, ref:LegacyRef<HTMLElement>)=>{

    const classnames = useContext(ClassnamesContext);

    return <section ref={ref} id="services" className="px-4"  style={{marginBottom: "100px"}}>
        <h2 style={{marginBottom: "24px"}} className="text-light text-center">Nos services</h2>
        <p style={{marginBottom: "48px"}} className={"text-light text-center services-desc " +  classnames.services}>
            Chez nous, nous sommes dédiés à transformer vos idées en réalité. 
            Nous offrons une gamme de services comprenant la création de sites vitrines, 
            le développement d’applications web et la mise en place de sites e-commerce. 
            Chaque projet est traité avec soin et attention, garantissant un produit final 
            qui non seulement répond à vos besoins, mais les dépasse. 
            <a href="#contact" className="nav-link text-primary">Contactez-nous</a> aujourd’hui pour commencer à donner vie à vos idées.
        </p>
        <div className="d-flex justify-content-between flex-wrap">
            <Service className={classnames.services} imgLink={"/vitrine.jpg"} title="Site vitrine">
                Lorem ipsum dolor sit amet consectetur, 
            </Service>
            <Service className={classnames.services} imgLink={"/app.jpg"} title="Application web">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Service>
            <Service className={classnames.services} imgLink={"/ecommerce.jpg"} title="Site e-commerce">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Service>
        </div>
    </section>
});

const Service: FC<PropsWithChildren & {
    className?: string,
    title: "Site vitrine" | "Application web" | "Site e-commerce",
    imgLink: string,
    style?: CSSProperties
}> = ({children, className, title, imgLink, style})=>{

    return <div style={style} className={"service card position-relative" + (className ? " " + className : "")}>
        <div className="card-header">
        <h5 className="card-title text-center">{title}</h5>
        </div>
        <img src={imgLink} className="card-img" alt="site vitrine"/>
        <div className="card-body position-sticky bottom-0 bg-light">
            <p className="card-text">{children}</p>
        </div>
    </div>
}