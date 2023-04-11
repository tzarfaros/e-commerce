import React from 'react';
import "./footer.style.css"
import YoutubeLogo from "../../assets/images/logos/icons8-lecture-de-youtube-480.png"
import TwitterLogo from "../../assets/images/logos/icons8-twitter-480.png"
import InstagramLogo from "../../assets/images/logos/icons8-instagram-240.png"

const FooterRender = () => {
    return (
        <div className={"containerFooter"}>
            <div className={"containerFooterBlockLeft"}>
                <div className={"containerFooterItem"}>
                    <div className={"footerBlockTitle"}>
                        meet us
                    </div>
                    <div className={"footerBlockContain"}>
                        <p>
                            Being very busy and with a view to fully benefiting our customers, we regularly change
                            offices (fires, raids, other problems). To follow us:
                            <a href={"https://www.infomigrants.net/fr/country/Russie/"}> infomigrants.net</a>
                        </p>

                    </div>
                </div>
                <div className={"containerFooterItem"}>
                    <div className={"footerBlockTitle"}>
                        Warning
                    </div>
                    <div className={"footerBlockContain"}>
                        <p>
                            Silk Rail is in no way responsible for any overflow of a user of our platform in their life.
                            But if you want a rail, come on boy
                        </p>
                    </div>
                </div>
                <div className={"containerFooterItem"}>
                    <div className={"footerBlockTitle"}>
                        Utils
                    </div>
                    <div className={"footerBlockContain"}>
                        <p>Our Lawyers:
                            <a href={"https://fr.wikipedia.org/wiki/Avocat_(fruit)"}><br/>concretedefense.onion</a>
                        </p>

                        <p>For More Security:
                            <a href={"https://www.westernunion.com/fr/fr/home.html"}><br/>westernunion.com.onion</a>
                        </p>
                    </div>
                </div>
                <div className={"containerFooterItem"}>
                    <div className={"footerBlockTitle"}>
                        Blogs
                    </div>
                    <div className={"footerBlockContain"}>
                        <p>
                            We paid them handsomely:
                        </p>
                        <ul>
                            <li>
                                <a href={"https://copainsdavant.linternaute.com/p/laurent-freund-897880"}
                                   target={"_blank"}>laurentfreund.com</a>
                            </li>
                            <li>
                                <a href={"https://www.ionis-group.com/"} target={"_blank"}>ionis.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={"containerFooterBlockRight"}>
                <div>
                    <div className={"footerBlockTitle"}>
                        Socials Networks
                    </div>
                    <div className={"footerBlockContainLogos"}>
                        <div
                            className={"footerContainerLogo"}
                            onClick={((e) => {
                                window.open("https://www.youtube.com/@echooftruth4993/featured", "_blank")
                            })}
                        >
                            <img src={YoutubeLogo} alt={"Link Youtube"}/>
                        </div>
                        <div
                            className={"footerContainerLogo"}
                            onClick={((e) => {
                                window.open("https://www.instagram.com/uglybabynyc/?hl=fr", "_blank")

                            })}
                        >
                            <img src={InstagramLogo} alt={"Link Instagram"}/>
                        </div>
                        <div
                            className={"footerContainerLogo"}
                            onClick={((e) => {
                                window.open("https://twitter.com/realDonaldTrump", "_blank");
                            })}
                        >
                            <img src={TwitterLogo} alt={"Link Twitter"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterRender;
