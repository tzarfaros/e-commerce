import React, {useRef} from 'react';
import HomeFirstSlide from "../../layouts/home.first.slide/home.first.slide";
import NewCollectionSlide from "../../layouts/new.collection.slide/new.collection.slide";
import ListAvantages from "../../layouts/list.avantages/list.avantages";
import Carousel from "../../components/carousel/carousel";
import "./home.style.css"
import ListItemBody from "../../components/list.items.body/list.item.body";

export default function HomeRender() {

    const refTendenciesTitle = useRef<HTMLDivElement>(null);
    const autoScrollToReferencePassed = (elRef: React.RefObject<HTMLDivElement> | HTMLDivElement): void => {
        const el = elRef instanceof HTMLDivElement ? elRef : elRef.current;
        const offset = 320;
        if (el) {
            const topPos = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: topPos - offset, behavior: 'smooth'});
        }
    }
    return (
        <div>
            <HomeFirstSlide autoScrollFunction={autoScrollToReferencePassed} reference={refTendenciesTitle}/>
            <ListAvantages/>
            <div style={{
                width: "100vw",
                height: "100vh",
            }}>

                <NewCollectionSlide/>
            </div>
            <div style={{
                marginTop: "200vh"
            }}>
                <Carousel reference={refTendenciesTitle}/>
                <ListItemBody/>
            </div>


        </div>
    );
}
