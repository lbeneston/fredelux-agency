import { Facebook } from "../../svg/Facebook";
import { Instagram } from "../../svg/Instagram";
import { Soundcloud } from "../../svg/Soundcloud";
import { SocialNetwork } from "../socialNetwork/SocialNetwork";
import { SocialNetworkListComponent } from "./Styles";

export const SocialNetworkList = () => {
    return (
        <SocialNetworkListComponent>
            <SocialNetwork
                href="https://www.facebook.com/fredeluxagency"
                logo={<Facebook />}
            />
            <SocialNetwork
                href="https://www.instagram.com/fredelux.peewee/"
                logo={<Instagram />}
            />
            <SocialNetwork
                href="https://soundcloud.com/dj-fredelux"
                logo={<Soundcloud />}
            />
        </SocialNetworkListComponent>
    );
}