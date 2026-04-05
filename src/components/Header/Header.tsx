import React from "react";
import { HeaderProps } from "./Header.types";

export const Header = ({title}: HeaderProps) : React.JSX.Element => {
    return <header className="header"> <h1>{title}</h1></header>
}