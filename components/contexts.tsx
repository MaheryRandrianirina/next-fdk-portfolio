import { Context, MouseEventHandler, createContext } from "react";
import { ClassNamesType } from "./portfolio";

const ClickMenuContext: Context<MouseEventHandler<HTMLLIElement>> = createContext((e)=>{
    console.log(e)
});

const ClassnamesContext: Context<ClassNamesType> = createContext({
    banner: "",
    services: "",
    technos: "",
    contact: ""
});

export {
    ClickMenuContext,
    ClassnamesContext
}