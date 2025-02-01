import { useState } from "react";
import { PartenairesCarrouselComponent } from "./Styles";
import { Partenaires } from "../partenaires/Partenaires";

export const PartenairesCarrousel = () => {
    const sliderArr = [
        <Partenaires
            href="https://beaumarly.com/"
            src={`${process.env.PUBLIC_URL}/images/Groupe_Beaumarly.jpg`}
            nom="Groupe Beaumarly"
        />,
        <Partenaires
            href="https://www.blackcode.fr/"
            src={`${process.env.PUBLIC_URL}/images/Groupe_black_code.jpg`}
            nom="Groupe Black Code"
        />,
        <Partenaires
            href="https://www.novelty-group.com/"
            src={`${process.env.PUBLIC_URL}/images/Novelty_group.jpg`}
            nom="Groupe Novelty"
        />,
    ];

    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };

    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <PartenairesCarrouselComponent>
            <div className="partenaires_container">
                <div className="partenaires_container_buttons">
                    <button type="button" onClick={goLeft}>
                        &#10094;
                    </button>
                    <div>&#10072;</div>
                    <button type="button" onClick={goRight}>
                        &#10095;
                    </button>
                </div>

                <div className="partenaires_container_background" />
                <h2 className="partenaires_container_title">Nos partenaires</h2>
                <div className="partenaires_container_carrousel">
                    {sliderArr.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="partenaires_container_carrousel_slide"
                                style={{ transform: `translateX(${x}% )` }}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
        </PartenairesCarrouselComponent>
    );
}
