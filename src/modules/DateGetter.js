import React, { useRef, useState } from 'react';
import '../css/dateGetter.css';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const DateGetter = (props) => {
    const days = [];
    for(let i=1; i<32; i++){
        days.push(<option value={i} key={`${i}dys`}>{i}</option>);
    }

    const monthsStrings = [
        "January","February","March","April","May","June","July","August","September","October","November","December"
    ];
    let monthsPrep = monthsStrings.keys();
    let months = [];
    for(const key of monthsPrep){
        months.push(<option value={key+1} key={`${key+1}mnts`}>{monthsStrings[key]}</option>);
    }
        
    const years = [];
    for(let i=2022; i>1994;i--){
        years.push(<option value={i} key={`${i}yrs`}>{i}</option>)
    }

    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2022);

    const [isInvalid, setIsInvalid] = useState(false);

    let refDate = useRef(null);

    React.useEffect(() => {
        const validateDate = () => {
            //NASA APOD API retrieve images after 16 jun 1995
            if(year === '1995' && month <= '6'){
                if(month < '6'){
                    setIsInvalid(true);
                    return false;
                } else if(month === '6' && day < '17'){
                    setIsInvalid(true);
                    return false;
                }
            } else {
                setIsInvalid(false);
                return true;
            }
        }
        
        let validDate = validateDate();
        
        if(validDate) refDate.current = `${year}-${month}-${day}`; else refDate.current = null;

    }, [year, month, day]);
    

    const handleInputSubmit = (event) => {
        event.preventDefault();
        props.retrieveDate(refDate.current);
    }

    return (
        <div className='dataInput'>
            <form onSubmit={handleInputSubmit}>
                <label id="dateLabel">Date :</label>
                <select className="inputDates" onChange={(event) => setDay(event.target.value)} >{days}</select>
                <select className="inputDates" onChange={(event) => setMonth(event.target.value)}>{months}</select>
                <select className="inputDates" onChange={(event) => setYear(event.target.value)}>{years}</select>
                
                {isInvalid ? <span id="warnDate">Invalid date!</span> : null}
                
                <br /><button type="submit" id="goSearch"> <ImageSearchIcon sx={{fontSize: 100, color: '#f1f1f1'} }/></button>
            </form>
            <br/>
        </div>
    );
}
export default DateGetter;