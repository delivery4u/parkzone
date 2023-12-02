import React from 'react'
import {Link} from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube, FiMail } from "react-icons/fi";

const Copyright = () => {
    return (
        <div className="copyright-area copyright-style-one">
            <div className="container">
                <div className="row align-items-center">
                <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default">
                                        <li><Link to={{ pathname: "https://x.com/tprofit_pl/" }} target='_blank'><FiTwitter /></Link></li>
                                        <li><Link to={{ pathname: "https://t.me/tprofit_pl" }} target='_blank'><FiMail /></Link></li>
                                        <li><Link to={{ pathname: "https://www.instagram.com/tprofit_pl/" }} target='_blank'><FiInstagram /></Link></li>
                                    </ul>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;
