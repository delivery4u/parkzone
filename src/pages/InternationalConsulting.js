import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderTwo from '../common/header/HeaderTwo';
import TabThree from '../elements/tab/TabThree';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import SlipFour from "../elements/split/SlipFour";
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import BlogClassicData from '../data/blog/BlogList.json';
import ContactOne from "../elements/contact/ContactOne";
var BlogListData = BlogClassicData.slice(0, 3);


const InternationalConsulting = () => {
    return (
        <>
            <SEO title="International Consulting" />
            <main className="page-wrapper">
                <HeaderTwo btnStyle="btn-small btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 variation-default height-850 bg_image" data-black-overlay="7" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-18.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <h1 className="title display-one"> <br /> <span className="theme-gradient">Business &</span> <span className="theme-gradient">Development</span></h1>
                                    <p className="description">We help our clients succeed by creating their projects with our experience.</p>
                                    <div className="button-group">
                                        <Link className="btn-default btn-medium btn-icon" to="#">Contact <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* Start Elements Area  */}
                <div className="rwt-split-area no-radius">
                    <div className="wrapper">
                        <SlipFour />
                    </div>
                </div>
                {/* End Elements Area  */}

                {/* Start Elements Area  */}
                <div className="rwt-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Partnership"
                                    title = "We can help you with"
                                    description = ""
                                />
                            </div>
                        </div>
                        <TabThree />
                    </div>
                </div>
                {/* End Elements Area  */}                
 {/* Start Contact Area  */}
 <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Contact"
                                        title = "Find us here"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}

export default InternationalConsulting
