import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";

const Data = [
    {
        countNum : 5,
        countTitle: 'Market Products',
    },
    {
        countNum : 10000000,
        countTitle: 'Revenue (EUR)',
    },
    {
        countNum : 10,
        countTitle: 'Satisfaction Clients',
    },
    {
        countNum : 1000000,
        countTitle: 'Investments Wallet (EUR)',
    },
];
const SlipFour = () => {
    return (
        <div className="rn-splite-style bg-color-blackest">
            <div className="split-wrapper">
                <div className="row no-gutters radius-10 align-items-center">
                    <div className="order-2 order-lg-1 col-lg-12 col-xl-6 col-12">
                        <div className="split-inner">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h4 className="title">Start Your Project With Us</h4>
                            </ScrollAnimation>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">We are team of a succesfull founders, business managers and investors and we help developed project on every stage.</p>
                            </ScrollAnimation>

                            <div className="row">
                                {Data.map((data, index) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                        <div className="count-box counter-style-4 text-start">
                                            <TrackVisibility once>
                                                {({ isVisible }) => isVisible && 
                                                    <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                                            </TrackVisibility>
                                            <h5 className="counter-title">{data.countTitle}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="order-1 order-lg-2 col-lg-12 col-xl-6 col-12">
                        <div className="thumbnail">
                            <img src="./images/split/split-04.jpg" alt="split Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlipFour;