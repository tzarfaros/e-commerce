import React from 'react';
import "./list.avantages.style.css"
import QualityLogo from "../../assets/images/logos/icons8-best-seller-90.png"
import SilenceLogo from "../../assets/images/logos/icons8-silencieux-90.png"
import TrustLogo from "../../assets/images/logos/icons8-poignée-de-main-90.png"
// @ts-ignore
import VideoPills from "../../assets/videos/disolvingPink.webm"

const ListAvantages = () => {
    return (
        <div className={"containerListAvantages"}>
            <video autoPlay muted loop className="containerListAvantagesVideo">
                <source src={VideoPills} type="video/mp4"/>
            </video>
            <div className={"containerListAvantagesItem"}>
                <div className={"containerListAvantagesItemFlex"}>
                    <div className={"containerListAvantagesItemFlexContainerImage"}>
                        <img src={TrustLogo}/>
                    </div>
                    <div className={"containerListAvantagesItemFlexContainerName"}>
                        <h5>Trust</h5>
                    </div>
                </div>

            </div>

            <div className={"containerListAvantagesItemCenter"}>
                <div className={"containerListAvantagesItemFlex"}>
                    <div className={"containerListAvantagesItemFlexContainerImage"}>
                        <img src={QualityLogo}/>
                    </div>
                    <div className={"containerListAvantagesItemFlexContainerName"}>
                        <h5>Quality</h5>
                    </div>
                </div>
            </div>

            <div className={"containerListAvantagesItem"}>
                <div className={"containerListAvantagesItemFlex"}>
                    <div className={"containerListAvantagesItemFlexContainerImage"}>
                        <img src={SilenceLogo}/>
                    </div>
                    <div className={"containerListAvantagesItemFlexContainerName"}>
                        <h5>Discretion</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListAvantages;
