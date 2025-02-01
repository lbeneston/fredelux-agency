import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LogoFA } from "../../svg/LogoFA";
import { LogoWrapper, NavWrapper } from "./Styles";

export const Nav = () => {
    const [topPosition, setTopPosition] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (window.scrollY === 0) {
            setTopPosition(true);
        } else {
            setTopPosition(false);
        }

        function onScroll() {
            const currentPosition = window.scrollY;
            if (currentPosition > 0) {
                setTopPosition(false);
            } else {
                setTopPosition(true);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const SwitchNav = () => {
        const location = useLocation();
        const { pathname } = location;
        if (pathname === "/") {
            return (
                <NavWrapper topPosition={topPosition}>
                    <LogoWrapper to="/#">
                        <LogoFA />
                    </LogoWrapper>
                </NavWrapper>
            );
        }
        return (
            <NavWrapper topPosition={false}>
                <LogoWrapper to="/#">
                    <LogoFA />
                </LogoWrapper>
            </NavWrapper>
        );
    };

    return <SwitchNav />;
}
