import React from "react";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Training from "./components/offer/Training";
import Outdoor from "./components/offer/Outdoor";
import IT from "./components/offer/IT";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/offer-training" element={<Training />} />
                    <Route path="/offer-outdoor" element={<Outdoor />} />
                    <Route path="/offer-it" element={<IT />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
