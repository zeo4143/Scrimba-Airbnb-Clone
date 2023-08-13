import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"
import "./App.css"

export default function App(){

    const cardsData = data.map(item => {
        return(
            <Card 
        
                key={item.id}
                {...item}
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
            />
        )
        
    })

    return(
        <div>
            <Navbar />
            <Hero />
            <section className="section">
                {cardsData}
            </section>
            
            
        </div>
        
    )
}