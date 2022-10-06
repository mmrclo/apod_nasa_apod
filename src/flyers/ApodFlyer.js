import React from "react";
import "../css/apodFlyer.css"
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const NasaFlyer = () => {
    return (
        <>
        <div className="mySlides fade active">
            <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer"><img src="/imgs/nasa-logo.svg" id="nasaLogo" alt="NASA logo"/></a>
            <h1 id="apod">Astronomy<br />Picture<br />Of the<br />Day</h1>
            <h5 id="dicionDef">: the study of objects and matter outside the earth's atmosphere and of their physical and chemical properties - <a href="https://www.merriam-webster.com/dictionary/astronomy#:~:text=Definition%20of%20astronomy,their%20physical%20and%20chemical%20properties" target="_blank" rel="noreferrer">astronomy</a></h5>
        </div>
        </>
    )
}

const QuestFlyer = () => {
    return (
        <>
        <div className="mySlides fade active">
            <div id="publiTalk">
                <h2 id="publiText">Give a date<br /> and see <br />
                the picture <br /><a href="https://www.nasa.gov/" target="_blank" rel="noreferrer">NASA </a>posted <br />that day!</h2>
                <div id="rocketIcon">
                    <RocketLaunchIcon sx={{fontSize: 144, color: '#f1f1f1'} }/>
                </div>
            </div>
        </div>
        </>
    )
}

const BirthdayFlyer = () => {
    return (
        <>
        <div className="mySlides fade active">
            <h5 id="dateOfServiceInfo">16th of July 1995 is the start of the service</h5>
        </div>
        </>
    )
}

export { NasaFlyer, QuestFlyer, BirthdayFlyer };