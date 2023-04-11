interface Color {
    description: string,
    code: string
}

export default class Colors {

    get bg_color(): Color {
        return this._bg_color;
    }

    get white(): Color {
        return this._white;
    }

    get beige(): Color {
        return this._beige;
    }

    get grey(): Color {
        return this._grey;
    }


    get lightGrey(): Color {
        return this._lightGrey;
    }

    private _white: Color = {
        description: "White color for text.",
        code: "#ffffff"
    };

    private _bg_color: Color = {
        description: "string",
        code: "#dfe6e9"
    };

    private _grey: Color = {
        description: "string",
        code: "#7f8c8d"
    };

    private _beige: Color = {
        description: "string",
        code: "#ebc6b4"
    };

    private _darkGrey: Color = {
        description: "string",
        code: "#2d3436"
    };

    private _lightGrey: Color = {
        description: "string",
        code: "#ecf0f1"
    };

}
