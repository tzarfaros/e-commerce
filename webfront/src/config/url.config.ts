export default class UrlConfig {

    get urlServerBack(): string {
        return this._urlServerBack;
    }

    private _urlServerBack: string = "http://localhost:8080";

}
