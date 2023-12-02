import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        title: 'Trading Instruments',
        description: 'There are many instruments on the market from currencies (USD, EUR, BTC), indexes (NASDAQ, DAX, SP500) to commodities (OIL, GOLD, COPPER) and we choose some best of them to teach you about it, teach you how to make money on them.'
    },
    {
        title: 'Leverage',
        description: 'Market leverage can boost your return on investment, but it can also cause you to lose more money thats why you need to understand how leverage works and how you can use it for the best results in trading.'
    },
    {
        title: 'Risk Limit',
        description: 'This is the most important, fundamental control over the risks inherent in trading activities or any other investments. Risk limit tools are used to ensure that trading positions dont blow up when markets move against our original view.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--40 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-700"><Link to="/consulting" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;