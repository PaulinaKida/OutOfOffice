import React from "react";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Training from "./components/offer/Training";
import Outdoor from "./components/offer/Outdoor";
import IT from "./components/offer/IT";
import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/offer-training">
                        <Training />
                    </Route>
                    <Route path="/offer-outdoor">
                        <Outdoor />
                    </Route>
                    <Route path="/offer-it">
                        <IT />
                    </Route>
                </Switch>

            </Layout>
        </>
    );
}

export default App;