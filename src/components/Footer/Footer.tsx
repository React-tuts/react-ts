import React, { useEffect, useState } from "react"
import { BusinessStatus } from "./Footer.types"
import OpenHours from "../OpenHours/OpenHours"
/**
 * 
 * @returns Footer
 */
export const Footer = () : React.JSX.Element => {

    const [open,setOpen] = useState<BusinessStatus>("closed")
    useEffect(() => {
        const hours = new Date().getHours();
        setOpen(hours > 5 && hours < 22 ? "open" : "closed");
    },[])
    
    return <footer className="footer"> 
                <OpenHours hours={22} status={open} /> </footer>
}