import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./card";
import "../style/style.css"

export default function App() {
    return (
        <div className="App">
            <Carousel>
                <Card />
            </Carousel>
        </div >
    )
}