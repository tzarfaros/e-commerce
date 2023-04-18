import React, {FC, useEffect, useRef, useState} from 'react';
import "./new.collection.slide.style.css"
// @ts-ignore
//import {VideoScroll} from 'react-video-scroll'
import ScrollVideo from "react-scroll-video";

import {Controller, Scene} from 'react-scrollmagic';
import {ScrollTrigger, Timeline, Tween} from 'react-gsap';
import gsap from 'gsap';
import DeadLogo from "../../assets/images/logos/icons8-crâne-100.png"
import FuckLogo from "../../assets/images/logos/icons8-majeur-90.png"
import PrisonLogo from "../../assets/images/logos/icons8-fil-de-fer-barbelé-100.png"
import DrugLogo from "../../assets/images/logos/icons8-main-avec-une-pilule-100.png"
import CoolLogo from "../../assets/images/logos/icons8-cool-96.png"

// @ts-ignore
import DisolvingVideo from '../../assets/videos/disolvingPink.webm';
// @ts-ignore
//import DisolvingReverseVideo from '../../assets/videos/reverseCompress.mp4';
import WhitePowderImage from '../../assets/images/images/111-1116873_white-powder-png-transparent-white-powder-png.png';
import BackgroundImage
    from '../../assets/images/images/3235.jpg';
import TransportImage
    from '../../assets/images/images/cover-r4x3w1200-63b6ca76dbe56-plus-de-7-5-tonnes-de-cocaine-saisies-lors-d-une-operation-removebg-preview (1).png';
import {log} from "util";


import cloud from './img/cloud.png';
import conffeti from './img/conffeti.png';
import girl from './img/girl.png';
import light from './img/light.png';


const NewCollectionSlide = () => {
    // @ts-ignore
    gsap.registerPlugin(ScrollTrigger);


    // @ts-ignore
    // const setStyles = (wrapperEl, videoEl, playbackRate) => {
    //     wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
    //     playbackRate +
    //     'px'})`
    //     wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
    //     playbackRate +
    //     'px'})`
    // }

    const [scrollPosition, setScrollPosition] = useState(0);
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentVideo, setCurrentVideo] = useState(true);

    const myElementRef = useRef<HTMLDivElement>(null);
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

    useEffect(() => {
        const myElement = myElementRef.current;
        if (myElement) {
            const handleScroll = () => {
                const scrollTop = myElement.scrollTop;
                const scrollHeight = myElement.scrollHeight;
                const clientHeight = myElement.clientHeight;
                const isAtBottom = scrollTop + clientHeight === scrollHeight;
                setIsScrolledToBottom(isAtBottom);
            };
            myElement.addEventListener("scroll", handleScroll);
            return () => {
                myElement.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        for (var i = 0; i < document.getElementsByClassName("scrollmagic-pin-spacer").length; i++) {
            // @ts-ignore
            document.getElementsByClassName("scrollmagic-pin-spacer")[i].style.paddingBottom = 0;
        }
    }, [isScrolledToBottom]);

    useEffect(() => {
        if (videoRef.current) {
            const video = videoRef.current;

            let currentTime = video.currentTime
            if (scrollPosition > prevScrollPosition) {
                setCurrentVideo(true)
                // Si on scroll vers le bas, on continue la vidéo
                video.play();
            } else if (scrollPosition < prevScrollPosition) {
                setCurrentVideo(false)
                // Si on scroll vers le haut, on revient en arrière dans la vidéo
                video.currentTime = currentTime;
                video.play();
            }
            setPrevScrollPosition(scrollPosition);
        }
    }, [scrollPosition]);

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    // useEffect(() => {
    //
    //     setTimeout(() => {
    //
    //
    //         // @ts-ignore
    //         for (var i = 0; i < document.getElementsByClassName("scrollmagic-pin-spacer").length; i++) {
    //             // @ts-ignore
    //             document.getElementsByClassName("scrollmagic-pin-spacer")[i].style.paddingBottom = 0;
    //         }
    //     }, 1000)
    //
    // })


    return (
        <div className={"containerNewCollection"}>
            <Controller>
                <Scene duration={1600}
                       pin={true}
                       indicators={false} triggerHook="onLeave"
                >
                    {
                        // @ts-ignore
                        (progress) => (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100vh',
                                overflow: 'hidden',
//                                backgroundColor: "#e1a68c",
                                background: "linear-gradient(-135deg, #d5bfb3, #1787a1)",
                            }}
                                 ref={myElementRef}>
                                <Timeline totalProgress={progress} paused>

                                    <Tween
                                        from={{y: '80vh', opacity: 0.5}}
                                        to={{y: '0vh', opacity: 1}}
                                        duration={1600}
                                    >
                                        {/* 1 */}

                                        {/*
                                        TITLE
                                        */}
                                        <Tween
                                            from={{y: '-30vh', x: "0vw", opacity: 1}}
                                            to={{y: '-20vh', x: "0vw", opacity: 0}}
                                            duration={1600}
                                        >
                                            <div className={"newCollectionH1Container"}>
                                                <h1 className={"newCollectionH1"}>Why trust us?</h1>
                                            </div>
                                        </Tween>
                                        {/*
                                        END TITLE
                                        */}

                                        {/* 2 */}
                                    </Tween>

                                    {/*
                                        SPLIT BOTTOM
                                        */}
                                    {/*<Tween*/}
                                    {/*    from={{y: '30vh', x: "0vw", opacity: 0}}*/}
                                    {/*    to={{y: '0vh', x: "0vw", opacity: 1}}*/}
                                    {/*    duration={1600}*/}
                                    {/*>*/}
                                    {/*    <div className={"containerSpliterBottom"}/>*/}
                                    {/*</Tween>*/}
                                    {/*/!**/}
                                    {/*END SPLIT BOTTOM*/}
                                    {/**!/*/}


                                    {/*<Tween*/}
                                    {/*    from={{y: '-30vh', x: "-50vw", opacity: 0}}*/}
                                    {/*    to={{y: '-20vh', x: "-50vw", opacity: 1}}*/}
                                    {/*    duration={1900}*/}
                                    {/*>*/}
                                    {/*    <h1 style={{*/}
                                    {/*        width: '60%',*/}
                                    {/*        marginLeft: '40%',*/}
                                    {/*        transition: 'transform .4s ease-out',*/}
                                    {/*        position: 'absolute',*/}
                                    {/*        color: "white",*/}
                                    {/*        fontSize: 48,*/}
                                    {/*        letterSpacing: 2,*/}
                                    {/*        textAlign: "center",*/}
                                    {/*        zIndex: 4*/}
                                    {/*    }}>Premier top l</h1>*/}
                                    {/*</Tween>*/}


                                    {/*/!**/}
                                    {/*First Shadow top*/}
                                    {/**!/*/}
                                    {/*<Tween*/}
                                    {/*    from={{y: '-25vh', x: "60vw", opacity: 0}}*/}
                                    {/*    to={{y: '-25vh', x: "50vw", opacity: 1}}*/}
                                    {/*    duration={1600}*/}
                                    {/*>*/}
                                    {/*    <div style={{*/}
                                    {/*        height: "100%",*/}
                                    {/*        width: "200%",*/}
                                    {/*        transform: "skew(20deg)",*/}
                                    {/*        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"*/}
                                    {/*    }}>*/}
                                    {/*    </div>*/}

                                    {/*</Tween>*/}
                                    {/*<Tween*/}
                                    {/*    from={{y: '-30vh', x: "0vw", opacity: 0}}*/}
                                    {/*    to={{y: '-20vh', x: "0vw", opacity: 1}}*/}
                                    {/*    duration={1900}*/}
                                    {/*>*/}
                                    {/*    <h1 style={{*/}
                                    {/*        width: '60%',*/}
                                    {/*        marginLeft: '40%',*/}
                                    {/*        transition: 'transform .4s ease-out',*/}
                                    {/*        position: 'absolute',*/}
                                    {/*        color: "white",*/}
                                    {/*        fontSize: 48,*/}
                                    {/*        letterSpacing: 2,*/}
                                    {/*        textAlign: "center",*/}
                                    {/*        zIndex: 4*/}
                                    {/*    }}>top r!</h1>*/}

                                    {/*</Tween>*/}
                                    {/*<Tween*/}
                                    {/*    from={{y: '50vh', x: "-110vw", opacity: 0}}*/}
                                    {/*    to={{y: '50vh', x: "-100vw", opacity: 1}}*/}
                                    {/*    duration={1600}*/}
                                    {/*>*/}
                                    {/*    <div*/}
                                    {/*        style={{*/}
                                    {/*            height: "100%",*/}
                                    {/*            width: "200%",*/}
                                    {/*            transform: "skew(20deg)",*/}
                                    {/*            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",*/}
                                    {/*            position: "absolute",*/}
                                    {/*            bottom: 0,*/}
                                    {/*            zIndex: 4*/}
                                    {/*        }}*/}
                                    {/*    >*/}
                                    {/*    </div>*/}
                                    {/*</Tween>*/}

                                    {/*<Tween*/}
                                    {/*    from={{y: '30vh', x: "-50vw", opacity: 0}}*/}
                                    {/*    to={{y: '20vh', x: "-50vw", opacity: 1}}*/}
                                    {/*    duration={1900}*/}
                                    {/*>*/}
                                    {/*    <h1 style={{*/}
                                    {/*        width: '60%',*/}
                                    {/*        marginLeft: '40%',*/}
                                    {/*        transition: 'transform .4s ease-out',*/}
                                    {/*        position: 'absolute',*/}
                                    {/*        color: "white",*/}
                                    {/*        fontSize: 48,*/}
                                    {/*        letterSpacing: 2,*/}
                                    {/*        textAlign: "center",*/}
                                    {/*        zIndex: 4*/}
                                    {/*    }}>coucou bottom Left</h1>*/}
                                    {/*</Tween>*/}

                                    {/*<Tween*/}
                                    {/*    from={{y: '30vh', x: "0vw", opacity: 0}}*/}
                                    {/*    to={{y: '20vh', x: "0vw", opacity: 1}}*/}
                                    {/*    duration={3000}*/}
                                    {/*>*/}
                                    {/*    <h1 style={{*/}
                                    {/*        width: '60%',*/}
                                    {/*        marginLeft: '40%',*/}
                                    {/*        transition: 'transform .4s ease-out',*/}
                                    {/*        position: 'absolute',*/}
                                    {/*        color: "white",*/}
                                    {/*        fontSize: 48,*/}
                                    {/*        letterSpacing: 2,*/}
                                    {/*        textAlign: "center",*/}
                                    {/*        zIndex: 4*/}
                                    {/*    }}>coucou bottom right</h1>*/}
                                    {/*</Tween>*/}

                                    <Tween
                                        from={{y: '-60vh', x: "0vw", opacity: 0}}
                                        to={{y: '0vh', x: "0vw", opacity: 1}}
                                        duration={1600}
                                    >
                                        <div style={{
                                            width: '100vw',
                                            height: "100vh",
                                            transition: 'transform .4s ease-out',
                                            position: 'absolute',
                                            bottom: 0,
                                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                                            zIndex: 4,
                                            backgroundColor: "#ebc6b4"
                                        }}/>
                                    </Tween>


                                    {/* 4 */}

                                    <Tween
                                        from={{y: '0vh', x: '-30vw', opacity: 0}}
                                        to={{y: '0vh', x: "0vw", opacity: 1}}
                                        duration={1000}
                                    >
                                        <div id={"triangle-topleft"}/>
                                    </Tween>
                                    <Tween
                                        from={{y: '0vh', x: '30vw', opacity: 0}}
                                        to={{y: '0vh', x: "0vw", opacity: 1}}
                                        duration={1000}
                                    >
                                        <div id={"triangle-bottomright"}/>
                                    </Tween>

                                    {/*
                                        Bubbles Informations
                                    */}
                                    <Tween
                                        from={{y: '0vh', x: "-50vw", opacity: 0}}
                                        to={{y: '10vh', x: "-40vw", opacity: 1}}
                                        duration={1000}
                                    >
                                        <div style={{
                                            position: "absolute",
                                            width: 250,
                                            height: 250,
                                            zIndex: 6,
                                            display: "flex",
                                            flexDirection: "column",
                                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                                            // background: "#d5bfb3",
                                            background: " #1787a1",
                                            borderRadius: 300,
                                            textAlign: "center",
                                            color: "white"
                                        }}>
                                            <div style={{
                                                width: 70,
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                marginTop: 20,
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: 64,
                                                letterSpacing: 2,
                                                zIndex: 3,

                                            }}>
                                                <img src={DeadLogo} style={{width: "100%"}}/>
                                            </div>
                                            <h4 style={{
                                                fontWeight: "bold",
                                                fontSize: 24,
                                                paddingLeft: 0,
                                                paddingRight: 0,
                                                color: "black",
                                                letterSpacing: 1.3,

                                                paddingBottom: 0,
                                                margin: 0,
                                                marginBottom: -10,
                                                textTransform: "uppercase"
                                            }}>
                                                Mortal risk
                                            </h4>

                                            <p style={{
                                                width: "70%",
                                                marginLeft: "auto",
                                                letterSpacing: 1.1,
                                                marginRight: "auto",
                                            }}>
                                                Almost zero. We provide instructions for use, we are not dogs.
                                            </p>
                                        </div>
                                    </Tween>

                                    <Tween
                                        from={{y: '0vh', x: "-50vw", opacity: 0}}
                                        to={{y: '-20vh', x: "-25vw", opacity: 1}}
                                        duration={1000}
                                    >
                                        <div style={{
                                            position: "absolute",
                                            width: 250,
                                            height: 250,
                                            zIndex: 6,
                                            display: "flex",
                                            flexDirection: "column",
                                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                                            // background: "linear-gradient(60deg, #d5bfb3 65%, #1787a1)",
                                            background: "linear-gradient(220deg, #d5bfb3 15%, #1787a1)",
                                            borderRadius: 300,
                                            textAlign: "center",
                                            color: "white"
                                        }}>
                                            <div style={{
                                                width: 70,
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                marginTop: 10,
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: 64,
                                                letterSpacing: 2,
                                                zIndex: 3,
                                            }}>
                                                <img src={FuckLogo} style={{width: "100%"}}/>
                                            </div>
                                            <h4 style={{
                                                fontWeight: "bold",
                                                fontSize: 24,
                                                paddingLeft: 0,
                                                paddingRight: 0,
                                                color: "black",
                                                letterSpacing: 1.3,
                                                width: "95%",
                                                marginLeft: "2.5%",
                                                paddingBottom: 0,
                                                margin: 0,
                                                marginBottom: -10,
                                                textTransform: "uppercase"
                                            }}>
                                                Show your dismay
                                            </h4>

                                            <p style={{
                                                width: "70%",
                                                marginLeft: "auto",
                                                letterSpacing: 1.1,
                                                marginRight: "auto",
                                            }}>
                                                Want to show that you are not going to accept everything very nicely?
                                            </p>
                                        </div>
                                    </Tween>

                                    <Tween
                                        from={{y: '-60vh', x: "0vw", opacity: 0}}
                                        to={{y: '-25vh', x: "0vw", opacity: 1}}
                                        duration={1000}
                                    >
                                        <div style={{
                                            position: "absolute",
                                            width: 250,
                                            height: 250,
                                            zIndex: 6,
                                            display: "flex",
                                            flexDirection: "column",
                                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                                            // backgroundColor: "#95a5a6",
                                            background: "linear-gradient(220deg, #d5bfb3 50%, #1787a1)",
                                            borderRadius: 300,
                                            textAlign: "center",
                                            color: "white"
                                        }}>
                                            <div style={{
                                                width: 70,
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                marginTop: 20,
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: 64,
                                                letterSpacing: 2,
                                                zIndex: 3,

                                            }}>
                                                <img src={PrisonLogo} style={{width: "100%"}}/>
                                            </div>
                                            <h4 style={{
                                                fontWeight: "bold",
                                                fontSize: 24,
                                                paddingLeft: 0,
                                                paddingRight: 0,
                                                color: "black",
                                                letterSpacing: 1.3,
                                                paddingBottom: 0,
                                                margin: 0,
                                                marginBottom: -10,
                                                textTransform: "uppercase"
                                            }}>
                                                Prison risk
                                            </h4>

                                            <p style={{
                                                width: "70%",
                                                marginLeft: "auto",
                                                letterSpacing: 1.1,
                                                marginRight: "auto",
                                            }}>
                                                We have contacts, don't worry, we manage.
                                            </p>
                                        </div>
                                    </Tween>

                                    <Tween
                                        from={{y: '0vh', x: "50vw", opacity: 0}}
                                        to={{y: '-20vh', x: "25vw", opacity: 1}}
                                        duration={1000}
                                    >
                                        <div style={{
                                            position: "absolute",
                                            width: 250,
                                            height: 250,
                                            zIndex: 6,
                                            display: "flex",
                                            flexDirection: "column",
                                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                                            background: "linear-gradient(220deg, #d5bfb3 55%, #1787a1)",
                                            // background: "linear-gradient(60deg, #d5bfb3 15%, #1787a1)",
                                            borderRadius: 300,
                                            textAlign: "center",
                                            color: "white"
                                        }}>
                                            <div style={{
                                                width: 70,
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                marginTop: 20,
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: 64,
                                                letterSpacing: 2,
                                                zIndex: 3,

                                            }}>
                                                <img src={DrugLogo} style={{width: "100%"}}/>
                                            </div>
                                            <h4 style={{
                                                fontWeight: "bold",
                                                fontSize: 24,
                                                paddingLeft: 0,
                                                paddingRight: 0,
                                                color: "black",
                                                letterSpacing: 1.3,
                                                paddingBottom: 0,
                                                margin: 0,
                                                marginBottom: -10,
                                                textTransform: "uppercase"
                                            }}>
                                                Religion
                                            </h4>

                                            <p style={{
                                                width: "70%",
                                                marginLeft: "auto",
                                                letterSpacing: 1.1,
                                                marginRight: "auto",
                                            }}>
                                                Enter a new vision of your existence, we will tell you what to do.
                                            </p>
                                        </div>
                                    </Tween>
                                    <Tween
                                        from={{y: '0vh', x: "50vw", opacity: 0}}
                                        to={{y: '10vh', x: "40vw", opacity: 1}}
                                        duration={1000}
                                    >
                                        <div style={{
                                            position: "absolute",
                                            width: 250,
                                            height: 250,
                                            zIndex: 6,
                                            display: "flex",
                                            flexDirection: "column",
                                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                                            // backgroundColor: "darkgray",
                                            // background: " #1787a1",
                                            background: "#d5bfb3",
                                            borderRadius: 300,
                                            textAlign: "center",
                                            color: "white"
                                        }}>
                                            <div style={{
                                                width: 70,
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                marginTop: 20,
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: 64,
                                                letterSpacing: 2,
                                                zIndex: 3,

                                            }}>
                                                <img src={CoolLogo} style={{width: "100%"}}/>
                                            </div>
                                            <h4 style={{
                                                fontWeight: "bold",
                                                fontSize: 24,
                                                paddingLeft: 0,
                                                paddingRight: 0,
                                                color: "black",
                                                letterSpacing: 1.3,
                                                paddingBottom: 0,
                                                margin: 0,
                                                marginBottom: -10,
                                                textTransform: "uppercase"
                                            }}>
                                                Cool boy
                                            </h4>

                                            <p style={{
                                                width: "70%",
                                                marginLeft: "auto",
                                                letterSpacing: 1.1,
                                                marginRight: "auto",
                                            }}>
                                                Become the coolest and f*ck whoever you want!
                                            </p>
                                        </div>
                                    </Tween>

                                    {/*
                                     END OF
                                     Bubbles Informations
                                    */}

                                    <Tween
                                        from={{y: '140vh', x: '0vw', opacity: 0}}
                                        to={{y: '140vh', x: "0vw", opacity: 1}}
                                        duration={1000}
                                    >
                                        <div id={"oval"}/>
                                    </Tween>

                                    <Tween
                                        from={{y: '0vh', x: "0vw", opacity: 0}}
                                        to={{y: '0vh', x: "0vw", opacity: 1}}
                                        duration={1600}
                                    >
                                        <div style={{
                                            transition: 'transform .4s ease-out',
                                            position: 'absolute',
                                            bottom: 0,
                                            zIndex: 5,
                                            fontWeight: "bold",
                                            textTransform: "uppercase",
                                            fontSize: 60,
                                            marginBottom: 60
                                        }}
                                        >✨ Tendencies ✨
                                        </div>

                                    </Tween>
                                    {/* 5 */}
                                </Timeline>
                            </div>
                        )
                    }
                </Scene>
            </Controller>
        </div>
    );
};

export default NewCollectionSlide;
