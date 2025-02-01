import React from "react";
import { SocialNetworkComponent } from "./Styles";

interface SocialNetworkProps {
    href: string
    logo: any
}

export const SocialNetwork: React.FC<SocialNetworkProps> = ({ href, logo }) => {
    return (
        <SocialNetworkComponent href={href}>
            {logo}
        </SocialNetworkComponent>
    );
}