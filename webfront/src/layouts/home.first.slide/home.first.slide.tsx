import React, {FC} from 'react';
import "./home.first.slide.style.css"
import ImageECommercePNG from "../../assets/images/images/E-Commerce-Logo-Background-PNG-Image.png"


interface HomeFirstSlideInterface {
    autoScrollFunction: Function;
    reference: React.RefObject<HTMLDivElement>;
}

const HomeFirstSlide: FC<HomeFirstSlideInterface> = (props): JSX.Element => {
    return (
        <div className={"container"}>

            <div className={"containerTitleLeft"}>
                <h2>Our rails, Your future</h2>

                <h3>A desire to escape? To dump your job, destroy your office or type your best divorce? We are here for
                    you ! Scroll down to see our articles...</h3>

                <div className={"buttonLeft"} onClick={((e) => {
                    props.autoScrollFunction(props.reference)
                })}>
                    Click for current tendencies
                </div>
            </div>
            <div className={"containerImageRight"}>
                <img src={ImageECommercePNG}/>
            </div>
        </div>
    );
};

export default HomeFirstSlide;
