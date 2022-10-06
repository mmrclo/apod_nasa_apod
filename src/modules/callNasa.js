const callNasa = (dateOfPic, setResult) => {
    if(dateOfPic) {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateOfPic}`)
        .then((response) => response.json())
        .then((data) => { setResult(data); })
        .catch( (err) => {
            //console.log(err);
        })
    } else {
        setResult({data: {  
                            title: "Sorry, seems that an error have occurred, please try again.",
                            explanation: "Could not get."
                        }
                  });
    }
}

export default callNasa;