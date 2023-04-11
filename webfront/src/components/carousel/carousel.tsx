import React, {FC} from 'react';
import "./carousel.style.css"


interface CarouselInterface {
    reference: React.RefObject<HTMLDivElement>;
}

const Carousel: FC<CarouselInterface> = (props): JSX.Element => {
        const slidesContainer = document.getElementById("slides-container");
        const slide = document.querySelector(".slide");
        const prevButton = document.getElementById("slide-arrow-prev");
        const nextButton = document.getElementById("slide-arrow-next");


        return (
            <div className={"ctnCarousel"} ref={props.reference}>
                <section className="slider-wrapper">
                    <button className="slide-arrow" id="slide-arrow-prev" onClick={((e) => {
                        // @ts-ignore
                        slidesContainer[0].scrollLeft -= slide.clientWidth;

                    })}
                    >
                        &#8249;
                    </button>
                    <button className="slide-arrow" id="slide-arrow-next" onClick={((e) => {
                        // @ts-ignore
                        slidesContainer[0].scrollLeft += slide.clientWidth

                    })}
                    >
                        &#8250;
                    </button>
                    <ul className="slides-container" id="slides-container">
                        <li className="slide"></li>
                        <li className="slide"></li>
                        <li className="slide"></li>
                        <li className="slide"></li>
                    </ul>
                </section>
            </div>
        );
    }
;

export default Carousel;
