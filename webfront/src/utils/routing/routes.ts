import {FC} from "react";
import HomeRender from "../../views/home/home.render";

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>,
    header: boolean,
    footer: boolean,
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: HomeRender,
        header: true,
        footer: true,
    }
]
