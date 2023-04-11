import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {routes as appRoutes} from "./utils/routing/routes";
import HeaderRender from "./layouts/header/header.render";
import FooterRender from "./layouts/footer/footer.render";
import "./styles/index.css"

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {appRoutes.map((route) => (
                        <Route
                            key={route.key}
                            path={route.path}
                            element={
                                <>
                                    {route.header ? <HeaderRender></HeaderRender> : <></>}
                                    <route.component/>
                                    {route.footer ? <FooterRender></FooterRender> : <></>}
                                </>
                            }
                        />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
