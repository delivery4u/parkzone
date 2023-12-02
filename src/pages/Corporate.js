import React from 'react';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderTwo from '../common/header/HeaderTwo';
import FooterOne from '../common/footer/FooterOne';
import Copyright from '../common/footer/Copyright';
import ServiceOne from '../elements/service/ServiceOne';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import AboutTwo from "../elements/about/AboutTwo";
import CounterUpTwo from "../elements/counterup/CounterUpTwo";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";
import BrandOne from "../elements/brand/BrandOne";
import TeamFour from '../elements/team/TeamFour';
import PricingTwo from '../elements/pricing/PricingTwo';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamThree from "../elements/team/TeamThree";
import { Tweet } from 'react-twitter-widgets'
import { Timeline } from 'react-twitter-widgets'
import { AdvancedChart } from "react-tradingview-embed";


const Corporate = () => {
    return (
        <>
            <SEO title="TAKE PROFIT Trading Community" />
            <main className="page-wrapper">
                
                <div className="header-transparent-with-topbar">
                    <HeaderTwo btnStyle="btn-small btn-icon" HeaderSTyle="header-not-transparent" />
                </div>

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 height-950 bg_image" data-black-overlay="2" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-18.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-start">
                                    <h4 className="subtitle"><span className="theme-gradient">TAKE PROFIT TRADING COMMUNITY</span></h4>
                                    <h1 className="title display-one">Let's make trading easier</h1>
                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> We prepare chart analysis.</li>
                                        <li><span className="icon"><FiCheck /></span> Share our stock trading ideas.</li>
                                        <li><span className="icon"><FiCheck /></span> You will get high quality signals.</li>
                                    </ul>
                                    <div className="button-group mt--40 mt_sm--20">
                                        <button className="btn-default btn-icon" target="_blank" href=""><FiArrowRight /> Join Us <i className="icon"></i></button>
                                        <button className="btn-default btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Read More <i className="icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}


                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Learn with TAKE PROFIT community"
                                    description = "You can improve your skills and increase your productivity with our training. Our product is designed for both beginners who are not familiar with the world of trading and for traders who want to improve their knowledge and be in the best team and community."
                                    />
                            </div>
                        </div>
                        <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <ServiceOne/>
                        </div>
                </div>
                     {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                    <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">We are creative digital agency working for our company brands.</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">Laaam ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam accusantium dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque itaque expedita officiis rem ipsa! Ratione, rem reiciendis?</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* End Call To Action Area  */}      
                 </div>
                 </div>

                <div className="rwt-timeline-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">   
                                <Timeline
                                 dataSource={{
                                 sourceType: 'profile',
                                 screenName: 'tprofit_pl'
                                    }}
                                options={{
                                height: '800'
                                 }}
/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}


                <div className="rwt-timeline-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12"> 
                <TeamThree column="col-lg-4 col-md-6 col-12 mt--20" teamStyle="team-style-two" />
                </div>
                        </div>
                    </div>
                </div>
                {/*
                <div className="rwt-timeline-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">  
                <AdvancedChart widgetProps={{"theme": "dark"}} />;
                </div>
                        </div>
                    </div>
                </div>
                                 */}
                <Copyright />
            </main>
        </>
    )
}

export default Corporate
