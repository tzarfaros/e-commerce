import React, {FC, useEffect, useRef, useState} from 'react';
import "./new.collection.slide.style.css"
// @ts-ignore
//import {VideoScroll} from 'react-video-scroll'
import ScrollVideo from "react-scroll-video";

import {Controller, Scene} from 'react-scrollmagic';
import {ScrollTrigger, Timeline, Tween} from 'react-gsap';
import gsap from 'gsap';


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
            console.log("iciiii")
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
            {/*<ScrollVideo*/}
            {/*    // lower numbers = faster playback*/}
            {/*    playback={100}*/}
            {/*    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'*/}
            {/*    //src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"*/}
            {/*    //src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"*/}
            {/*    src={DisolvingReverseVideo}*/}
            {/*/>*/}
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
                                backgroundColor: "#e1a68c",
                            }}
                                 ref={myElementRef}>
                                <Timeline totalProgress={progress} paused>

                                    <Tween
                                        from={{y: '80vh', opacity: 0.5}}
                                        to={{y: '0vh', opacity: 1}}
                                        duration={1000}
                                    >
                                        <div style={{
                                            width: '100vw',
                                            height: "50vh",
                                            transition: 'transform .4s ease-out',
                                            position: 'absolute',
                                            bottom: 0,
                                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                                            zIndex: 2,
                                            backgroundColor: "#ebc6b4"
                                        }}/>


                                        {/*<div style={{*/}
                                        {/*    width: "100vw",*/}
                                        {/*    textAlign: "center",*/}
                                        {/*    position: "absolute",*/}
                                        {/*    zIndex: 10*/}
                                        {/*}}>*/}
                                        {/*    <h3 style={{*/}
                                        {/*        color: "white",*/}
                                        {/*        fontWeight: "bold",*/}
                                        {/*        fontSize: 60,*/}
                                        {/*        marginLeft: "auto",*/}
                                        {/*        marginRight: "auto",*/}
                                        {/*    }}>*/}
                                        {/*        Why trust us ?*/}
                                        {/*    </h3>*/}

                                        {/*</div>*/}


                                    </Tween>

                                    <Tween
                                        from={{y: '-30vh', x: "0vw", opacity: 0}}
                                        to={{y: '-20vh', x: "0vw", opacity: 1}}
                                        duration={1000}
                                    >
                                        <h1 style={{
                                            width: '60%',
                                            marginLeft: '40%',
                                            transition: 'transform .4s ease-out',
                                            position: 'absolute',
                                            color: "white",
                                            fontSize: 48,
                                            letterSpacing: 2,
                                            textAlign: "center",
                                            zIndex: 2
                                        }}>Fast Delivery!</h1>
                                    </Tween>

                                    <Tween
                                        from={{y: '-100vh', opacity: 0}}
                                        to={{y: '0vh', opacity: 1}}
                                        duration={1000}
                                    >
                                        <div style={{
                                            width: '100vw',
                                            height: "100vh",
                                            transition: 'transform .4s ease-out',
                                            position: 'absolute',
                                            bottom: 0,
                                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                                            zIndex: 2,
                                            backgroundColor: "#ebc6b4"
                                        }}/>
                                    </Tween>


                                    {/*<Tween*/}
                                    {/*//     from={{y: '0vh', opacity: 0}}*/}
                                    {/*//     to={{y: '-50vh', opacity: 1}}*/}
                                    {/*//     duration={1000}*/}
                                    {/*// >*/}
                                    {/*//     <div style={{*/}
                                    {/*//         width: '100vw',*/}
                                    {/*//         height: "50vh",*/}
                                    {/*//         transition: 'transform .4s ease-out',*/}
                                    {/*//         position: 'absolute',*/}
                                    {/*//         bottom: 0,*/}
                                    {/*//         zIndex: 2,*/}
                                    {/*//         backgroundColor: "#e1a68c"*/}
                                    {/*//     }}/>*/}
                                    {/*// </Tween>*/}

                                    {/*<Tween*/}
                                    {/*    from={{y: '-30vh', x: "0vw", opacity: 0}}*/}
                                    {/*    to={{y: '-20vh', x: "0vw", opacity: 1}}*/}
                                    {/*    duration={1000}*/}
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
                                    {/*        zIndex: 2*/}
                                    {/*    }}>222!</h1>*/}
                                    {/*</Tween>*/}

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
                                        duration={1000}
                                    >
                                        <div style={{
                                            transition: 'transform .4s ease-out',
                                            position: 'absolute',
                                            bottom: 0,
                                            zIndex: 2,
                                            fontWeight: "bold",
                                            textTransform: "uppercase",
                                            fontSize: 60,
                                            marginBottom: 60
                                        }}
                                        >✨ Tendencies ✨
                                        </div>

                                    </Tween>
                                    {/*<Tween*/}
                                    {/*    from={{y: '-10vh', x: "0vw", opacity: 0}}*/}
                                    {/*    to={{y: '-10vh', x: "0vw", opacity: 1}}*/}
                                    {/*    duration={1000}*/}
                                    {/*>*/}
                                    {/*</Tween>*/}
                                </Timeline>
                            </div>
                        )
                    }
                </Scene>
            </Controller>

            {/*<Controller>*/}
            {/*    <Scene duration={1300} pin={true} indicators={false} triggerHook="onLeave">*/}
            {/*        {*/}
            {/*            // @ts-ignore*/}
            {/*            (progress) => (*/}
            {/*                <div style={{*/}
            {/*                    display: 'flex',*/}
            {/*                    alignItems: 'center',*/}
            {/*                    justifyContent: 'center',*/}
            {/*                    width: '100%',*/}
            {/*                    height: '100vh',*/}
            {/*                    overflow: 'hidden',*/}
            {/*                    // backgroundImage: `url(${BackgroundImage})`,*/}
            {/*                    // backgroundPosition: "center",*/}
            {/*                }}>*/}
            {/*                    <Timeline totalProgress={progress} paused>*/}
            {/*                        <Tween*/}
            {/*                            // from={{y: '-110vh'}}*/}
            {/*                            // to={{y: '-90vh'}}*/}
            {/*                            from={{filter: "grayscale(80%)"}}*/}
            {/*                            to={{filter: "grayscale(0%)"}}*/}
            {/*                            duration={1200}*/}
            {/*                        >*/}
            {/*                            <img src={BackgroundImage} style={{*/}
            {/*                                width: '100vw',*/}
            {/*                                height: '100vh',*/}
            {/*                                // transition: 'transform .4s ease-out',*/}
            {/*                                position: 'absolute',*/}
            {/*                                transition: 'transform .4s ease-out',*/}
            {/*                                zIndex: 1,*/}
            {/*                                left: 0,*/}
            {/*                                top: 0,*/}
            {/*                            }}/>*/}
            {/*                        </Tween>*/}
            {/*                        <Tween*/}
            {/*                            from={{y: '-110vh'}}*/}
            {/*                            to={{y: '-90vh'}}*/}
            {/*                            duration={1000}*/}
            {/*                        >*/}
            {/*                            <img src={WhitePowderImage} style={{*/}
            {/*                                width: '100%',*/}
            {/*                                transition: 'transform .4s ease-out',*/}
            {/*                                position: 'absolute',*/}
            {/*                                zIndex: 1,*/}
            {/*                                left: 0,*/}
            {/*                                top: 0*/}
            {/*                            }}/>*/}
            {/*                        </Tween>*/}
            {/*                        <Tween*/}
            {/*                            from={{y: '70vh', scale: 1}}*/}
            {/*                            to={{y: '50vh', scale: 1.3}}*/}
            {/*                            duration={1000}*/}
            {/*                        >*/}
            {/*                            <img src={WhitePowderImage} style={{*/}
            {/*                                width: '100%',*/}
            {/*                                transition: 'transform .4s ease-out',*/}
            {/*                                position: 'absolute',*/}
            {/*                                zIndex: 1,*/}
            {/*                                left: 0,*/}
            {/*                                top: 0*/}
            {/*                            }}/>*/}
            {/*                        </Tween>*/}
            {/*                        <Tween*/}
            {/*                            // from={{y: '40vh', x: "0vh"}}*/}
            {/*                            // to={{y: '0vh'}}*/}
            {/*                            from={{y: '150vh', x: '-100vw', scale: 1}}*/}
            {/*                            to={{y: '15vh', x: '-25vw', scale: 1.3}}*/}
            {/*                            duration={1300}*/}
            {/*                        >*/}
            {/*                            <img src={TransportImage} style={{*/}
            {/*                                width: '50%',*/}
            {/*                                transition: 'transform .4s ease-out',*/}
            {/*                                position: 'absolute',*/}
            {/*                                zIndex: 2*/}
            {/*                            }}/>*/}
            {/*                        </Tween>*/}
            {/*                        <Tween*/}
            {/*                            from={{y: '100vh', opacity: 0.5}}*/}
            {/*                            to={{y: '30vh', opacity: 0.6}}*/}
            {/*                            duration={1000}*/}
            {/*                        >*/}
            {/*                            <img src={cloud} style={{*/}
            {/*                                width: '120%',*/}
            {/*                                transition: 'transform .4s ease-out',*/}
            {/*                                position: 'absolute',*/}
            {/*                                zIndex: 2*/}
            {/*                            }}/>*/}
            {/*                        </Tween>*/}

            {/*                        <Tween*/}
            {/*                            from={{y: '-30vh', x: "0vw", opacity: 0}}*/}
            {/*                            to={{y: '-20vh', x: "0vw", opacity: 1}}*/}
            {/*                            duration={1000}*/}
            {/*                        >*/}
            {/*                            <h1 style={{*/}
            {/*                                width: '60%',*/}
            {/*                                marginLeft: '40%',*/}
            {/*                                transition: 'transform .4s ease-out',*/}
            {/*                                position: 'absolute',*/}
            {/*                                color: "white",*/}
            {/*                                fontSize: 48,*/}
            {/*                                letterSpacing: 2,*/}
            {/*                                textAlign: "center",*/}
            {/*                                zIndex: 2*/}
            {/*                            }}>Fast Delivery!</h1>*/}
            {/*                        </Tween>*/}
            {/*                        <Tween*/}
            {/*                            duration={1000}*/}
            {/*                        >*/}
            {/*                            <></>*/}
            {/*                        </Tween>*/}
            {/*                    </Timeline>*/}

            {/*                </div>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    </Scene>*/}
            {/*</Controller>*/}


        </div>
    );
};

export default NewCollectionSlide;
