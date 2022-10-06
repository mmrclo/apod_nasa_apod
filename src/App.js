import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import callNasa from './modules/callNasa';
import Poster from './modules/Poster';
import Carousel from './modules/Carousel';

function App() {
    const [dateOfSearch, setDateOfSearch] = useState();
    const [response, setResponse] = useState();
    const [poster, setPoster] = useState();
  
    let mountRef = useRef(true);
    const [firstMount, setFirstMount] = useState(mountRef);

    useEffect(() => {
        callNasa(dateOfSearch, setResponse);
        if(dateOfSearch) setFirstMount(false);
        
    }, [dateOfSearch]);

    let fadeRef = useRef(null);
    const fadeToPoster = () => {
        fadeRef.current.scrollIntoView({ behavior: "smooth"});
    }

    useEffect(() => {
        if(firstMount===false) {
            setPoster(<Poster data={response} />);
            fadeToPoster();
        }
    }, [response, firstMount]);
    
return (
    <div className="App">
        <div className='quest'>
            <Carousel retrieveDate={setDateOfSearch} />
        </div>
        <div className="end" ref={fadeRef}>
            {poster}
        </div>
    </div>
  );
}

export default App;