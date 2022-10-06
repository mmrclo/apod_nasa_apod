import React, { useEffect, useState, useRef } from "react";
import '../css/Poster.css'

const Poster = (props) => {
    const {date, explanation, hdurl, media_type, title, url } = props.data;

    let picture;
    let [showExplanation, setShowExplan] = useState(false);

    const handleExplanation = () => {
        setShowExplan(!showExplanation);
    }

    const eofRef = useRef(null);
    const fadeToEof = () => {
        eofRef.current.scrollIntoView({behavior: "smooth"});
    }

    useEffect(() => {
        fadeToEof();
    }, [showExplanation]);
    
    if(media_type === "image") {
        picture =
        <>
            <figure>
                <img id="pictureAPOD" src={hdurl} alt={`${title} at times ${date}`} onClick={() => window.open(hdurl)}/>
            </figure>
        </>
    } else if (media_type === "video") {
        picture = <iframe width="auto" height="auto" src={url} title={title} onClick={() => window.open(url)}></iframe>
    };

    return (
        <div className="poster">
            <div className="pictureContainer">
                {picture}
            </div>
            <h2 id="posterTitle" onClick={handleExplanation}>{title}</h2>
            <figcaption> 
                <p id="aboutPicture" ref={eofRef}><br /> {showExplanation ?  `${explanation}` : ` `} </p>
            </figcaption>
        </ div>
    )
}

export default Poster;