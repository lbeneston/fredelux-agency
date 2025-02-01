import React from "react";
import { PartenairesCarrouselComponent } from "./Styles";

interface PartenairesProps {
    href: string;
    src: string;
    nom: string;
}

export const Partenaires: React.FC<PartenairesProps> = ({ href, src, nom }) => {
    return (
        <PartenairesCarrouselComponent href={href} target="_blank" rel="noreferrer">
            <img className="item_illustration" src={src} alt={nom} />
            <div className="item_description">
                <h4>{nom}</h4>
                <p>Découvrir</p>
            </div>
        </PartenairesCarrouselComponent>
    );
};

