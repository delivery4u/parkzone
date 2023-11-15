import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";

const Data = [
    {
        countNum : 100,
        countTitle: 'Happy car park owners',
    },
    {
        countNum : 365000,
        countTitle: 'Earned parking fees',
    },
    {
        countNum : 80,
        countTitle: 'Percent more effective',
    },
    {
        countNum : 999,
        countTitle: 'Parking fines issued',
    },
];
const CounterUpFour = ({textALign, counterStyle, column}) => {
    return (
        <div className="row">
            {Data.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`count-box ${counterStyle} ${textALign}`}>
                        <TrackVisibility once>
                            {({ isVisible }) => isVisible && 
                                <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                        </TrackVisibility>
                        <h5 className="counter-title">{data.countTitle}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CounterUpFour;