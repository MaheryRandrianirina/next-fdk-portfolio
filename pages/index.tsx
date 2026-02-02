import type { NextApiRequest, NextApiResponse } from "next";
import script from "next/script";
import { 
    Dispatch, 
    MouseEventHandler,
    ReactElement, 
    SetStateAction, 
    useCallback, 
    useEffect,
    useState 
} from "react";
import { Header } from "../components/header";
import { ClassnamesContext, ClickMenuContext } from "../components/contexts";
import { activeItemType } from "../types/components-props-types";
import { Banner } from "../components/sections/banner";
import { ServicesSection } from "../components/sections/services";
import { useInView } from "react-intersection-observer";
import { Technos } from "../components/sections/technos";
import { Contact } from "../components/sections/contact";

export type ClassNamesType = {
    banner: string,
    services: string,
    technos: string,
    contact: string
};

const useCustomInView = (onInView: (entry?: IntersectionObserverEntry)=>void) => {
    const { ref, inView, entry } = useInView({
        threshold: 0.25
    });
  
    useEffect(() => {
        if (inView) {
            onInView(entry);
        }
    }, [inView]);
  
    return ref;
};

export default function Portfolio(): ReactElement {

    const [activeItem, setActiveItem]: [
        activeItem: activeItemType,
        setActiveItem: Dispatch<SetStateAction<activeItemType>>
    ]  = useState("home" as activeItemType);

    const [classnames, setClassnames]: [
        classnames: ClassNamesType,
        setClassnames: Dispatch<SetStateAction<ClassNamesType>>
    ] = useState({
        banner: "",
        services: "",
        technos: "",
        contact: ""
    });

    const ref1 = useCallback(useCustomInView((entry)=>{
        setActiveItem(i => i !== "home" ? "home" : i);
    }), [setClassnames]);

    const ref2 = useCallback(useCustomInView((entry)=>{ 
        setActiveItem(i => i !== "services" ? "services" : i);

        setClassnames(c => {
            return {...c, services: "visible"}
        });
    }), [setClassnames]);

    const ref3 = useCallback(useCustomInView((entry)=>{ 
        
        setActiveItem(i => i !== "techno" ? "techno" : i);

        setClassnames(c => {
            return {...c, technos: "visible"}
        });
    }), [setClassnames]);

    const ref4 = useCallback(useCustomInView((entry)=>{ 
        
        setActiveItem(i => i !== "contact" ? "contact" : i);

        setClassnames(c => {
            return {...c, contact: "visible"}
        });
    }), [setClassnames]);

    const clickMenuHandler: MouseEventHandler<HTMLLIElement> = (e)=>{
        setActiveItem(e.currentTarget.classList[0] as activeItemType);
    }

    return <div id="portfolio" className="bg-dark">
        <ClickMenuContext.Provider value={clickMenuHandler}>
            <Header active={activeItem}/>
        </ClickMenuContext.Provider>

        <div className="container">
            <ClassnamesContext.Provider value={classnames}>
                <Banner ref={ref1}/>
                <ServicesSection ref={ref2}/>
                <Technos ref={ref3}/>
                <Contact ref={ref4}/>
            </ClassnamesContext.Provider>
        </div>
        <footer className="bg-light text-dark p-4 text-center text-bold">© 2026 Mahery Randrianirina. Tous droits réservés</footer>
        <script src="/bootstrap.js"></script>
    </div>
}


export async function getServerSideProps({req, res}: {req: NextApiRequest, res: NextApiResponse}){
    return {
        props: {}
    }
}
