import React, {FC} from 'react';
import "./list.item.body.style.css"
import CardBasic from "../cards/basic/card.basic";


interface ListItemInterface {

}


const ListItemBody: FC<ListItemInterface> = (props): JSX.Element => {
    return (
        <>
            <div className={"ctnTitleListItemBody"}>
                <div className={"ovalPlatform ovalPlatformRight"}/>

                <h3>
                    You will like them ... 💉
                </h3>

                <div className={"ovalPlatform ovalPlatformLeft"}/>

            </div>
            <div className={"ctnListItemBody"}>
                <CardBasic/>
                <CardBasic/>
                <CardBasic/>
                <CardBasic/>
                <CardBasic/>
                <CardBasic/>
                <CardBasic/>

            </div>
        </>
    );
};


export default ListItemBody;
