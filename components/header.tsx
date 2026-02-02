import { FC, MouseEventHandler, useContext } from "react";
import { activeItemType } from "../types/components-props-types";
import { ClickMenuContext } from "./contexts";
import Image from "next/image";

const Header: FC<{
    active: activeItemType
}> = ({active})=>{
    
    return <nav className="navbar navbar-expand-lg p-2 position-fixed top-0 start-0 end-0 bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-light ms-5" href="#">
        <Image src="/logo.png" alt=""  width="150" height="60"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
        <ul className="navbar-nav">
            <Home isActive={active === "home"}/>
            <Services isActive={active === "services"}/>
            <Technologies isActive={active === "techno"}/>
            <Contact isActive={active === "contact"}/>
        </ul>
      </div>
    </div>
  </nav>
}

const Home: FC<{
    isActive: boolean
}> = ({isActive}) => {

    const clickItemEventHandler: MouseEventHandler<HTMLLIElement> = useContext(ClickMenuContext);

    return <li className={"home nav-item" + (isActive ? " active" : "")} onClick={clickItemEventHandler}>
        <a href="#" className="nav-link text-light">Accueil</a>
    </li>
}

const Services: FC<{
    isActive: boolean
}> = ({isActive}) => {

    const clickItemEventHandler: MouseEventHandler<HTMLLIElement> = useContext(ClickMenuContext);

    return <li className={"services nav-item" + (isActive ? " active" : "")} onClick={clickItemEventHandler}>
        <a href="#services" className="nav-link text-light">Services</a>
    </li>
}

const Technologies: FC<{
    isActive: boolean
}> = ({isActive}) => {

    const clickItemEventHandler: MouseEventHandler<HTMLLIElement> = useContext(ClickMenuContext);

    return <li className={"techno nav-item"  + (isActive ? " active" : "")} onClick={clickItemEventHandler}>
        <a href="#technologies" className="nav-link text-light">Technologies</a>
    </li>
}

const Contact: FC<{
    isActive: boolean
}> = ({isActive}) => {

    const clickItemEventHandler: MouseEventHandler<HTMLLIElement> = useContext(ClickMenuContext);

    return <li className={"contact nav-item" + (isActive ? " active" : "")} onClick={clickItemEventHandler}>
        <a href="#contact" className="nav-link text-light">Contact</a>
    </li>
}

export {
    Header
}
