import React, {useEffect, useState} from 'react';
import "./header.style.css"

const HeaderRender = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 3000);
        });
    }, []);
    return (
        <div className={scroll ? "containerHeader headerBackground" : "containerHeader"}>
            {
                scroll ?
                    <>
                        <div className={"triangleHeaderLeft"}/>
                        <div className={"triangleHeaderRight"}/>
                    </>
                    :
                    <></>
            }
            {/*<div className={scroll ? "triangleHeaderLeft" : ""}/>*/}

            <div className={"containerHeaderTitle"}>
                <h1><span className={"titleSpanBeige"}>Silk</span> Rail</h1>
                {/*<div className={"lineHeader"}/>*/}
                <div className={"containerParallelogramHeader"}>
                    <div className={"parallelogram"}/>
                    <div className={"parallelogram colorBeige"}/>
                </div>
            </div>

            <div className={"containerHeaderNav"}>
                <ul>
                    <li>
                        item 1
                    </li>

                    <li>
                        item 2
                    </li>

                    <li>
                        item 3
                    </li>
                </ul>
            </div>

            <div className={"containerHeaderRight"}>
                <div
                    className={"buttonConnect"}
                    onClick={((e) => {
                        window.location.href = "/connect"
                    })}
                >
                    Connect
                </div>
            </div>
        </div>
    );
};

export default HeaderRender;
