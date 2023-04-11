import React from 'react';
import "./card.basic.css"
import ImageTest from "../../../assets/images/images/3235.jpg"
import IconCart from "../../../assets/images/logos/icons8-panier-90.png"

const CardBasic = () => {
    return (
        <div className={"ctnCardBasic"}>
            <div className={"ctnCardBasicImg"}/>
            <div className={"ctnCardBasicBody"}>
                <h3>
                    Kg of coke 💊
                </h3>

                <p>
                    eorjfnojrebngj e,epkjegirgj ei iforhf oihhif ezrfjoh ofhehf hfo eorjfnojrebngj e,epkjegirgj ei
                    iforhf oihhif ezrfjoh ofhehf hfo eorjfnojrebngj e,epkjegirgj ei iforhf oihhif ezrfjoh ofhehf hfo
                    eorjfnojrebngj e,epkjegirgj ei iforhf oihhif ezrfjoh ofhehf hfo
                </p>


                <div>
                    <div>
                        <img src={IconCart}/>
                    </div>
                    <span>
                    199.99€
                </span>
                </div>
            </div>
        </div>
    );
};

export default CardBasic;
