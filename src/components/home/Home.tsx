import { HomeComponent } from "./Styles"

export const HomeSection = () => {
    return (
        <HomeComponent>
            <source srcSet={`${process.env.PUBLIC_URL}/images/service_sound_design.webp`} type="image/webp" />
            <img className="home_illustration" src={`${process.env.PUBLIC_URL}/images/service_sound_design.jpg`} alt="" />
            <div className="home_title">
                <h1 className="home_title_h1">
                    Fredelux <span className="home_title_span">Agency</span>
                </h1>
            </div>
        </HomeComponent>
    )
}