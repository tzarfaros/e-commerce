import axios from "axios";
import UrlConfig from "../url.config";

interface TokenInterface {
    token: string
}

let urlConfig = new UrlConfig()
export const InstanceLogs = axios.create({
    baseURL: urlConfig.urlServerBack,
    timeout: 1000
});

export const Instance = (props: TokenInterface) => axios.create({
    baseURL: urlConfig.urlServerBack,
    timeout: 1000,
    headers: {
        'authorization': 'bearer: ' + props.token,
    }
});

