import { 
    Dispatch, 
    MouseEventHandler,
    ReactElement, 
    SetStateAction, 
    useCallback, 
    useEffect,
    useState 
} from "react";
import { Header } from "./header";
import { ClassnamesContext, ClickMenuContext } from "./contexts";
import { activeItemType } from "../types/components-props-types";
import { Banner } from "./sections/banner";
import { ServicesSection } from "./sections/services";
import { useInView } from "react-intersection-observer";
import { Technos } from "./sections/technos";
import { Contact } from "./sections/contact";

export type ClassNamesType = {
    banner: string,
    services: string,
    technos: string,
    contact: string
};

type OptionsType = {
    rootMargin?: string,
    threshold: number
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

export function Portfolio(): ReactElement {

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
        <footer className="bg-light text-dark p-4 text-center text-bold">(C) Copyright : FDK 2023 - 2024</footer>
        
    </div>
}
