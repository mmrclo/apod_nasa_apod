import React, { useEffect, useState } from "react";
import '../css/Carousel.css';
import { NasaFlyer, QuestFlyer, BirthdayFlyer } from "../flyers/ApodFlyer";
import DateGetter from "./DateGetter";

let runCarousel = true;
const stopCarousel = () => {
    runCarousel = false;
}

const Carousel = (props) => {
    const slides = [
        <NasaFlyer />,
        <QuestFlyer />,
        <>
            <DateGetter retrieveDate={props.retrieveDate}/>
            <BirthdayFlyer/>
        </>
    ];

    let [index, setIndex] = useState(0);
    let [slideIndex, setSlideIndex] = useState(slides[index]);

    
    let intervaloop = setInterval(() => {
        if(runCarousel) {
            if (index < 2) setIndex(index +=1);
        } else {
            clearInterval(intervaloop)
        } 
    }, 3000);
    
    useEffect(() => {
        setSlideIndex(slides[index]);
    }, [index]);

return (
    <>
    <span id="prev" onClick={() => { 
                                    stopCarousel();
                                    if(index > 0) setIndex(index -=1)
                                }
    }>
        &#10094;
    </span>
    <div className="slideShowContainer">
        <div className="flyer">
            {slideIndex}
        </div>
    </div>
    <span id="next" onClick={() => {
                                    stopCarousel();
                                    if(index < slides.length-1) setIndex(index +=1)
                                }
    }>
        &#10095;
    </span>
    <br /><br />
    <div className="slideSelector">
        <span className="dot" onClick={() => {stopCarousel(); setIndex(0)}}></span>
        <span className="dot" onClick={() => {stopCarousel(); setIndex(1)}}></span>
        <span className="dot" onClick={() => {stopCarousel(); setIndex(2)}}></span>
    </div>
    </>
)
}

export default Carousel;