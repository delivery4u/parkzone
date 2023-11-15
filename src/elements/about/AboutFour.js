import React from 'react';
import VideoTwo from '../video/VideoTwo';
import { FiCheck } from "react-icons/fi";


const PopupData = [
    {
        id: "01",
        image: "./images/bg/bg-image-4.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
        ],
    }
]

const AboutFour = ({image}) => {
    return (
        <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-6">
                        {PopupData.map((item) => (
                            <div className="video-btn" key={item.id}>
                                <VideoTwo imagename={`${image}`} galleryItem={item} />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title">The future of parking solutions <br /> <strong>You decide how:</strong></h3>
                                <ul className="feature-list">
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Parking area looks</h4>
                                            <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Much it cost per hour and day</h4>
                                            <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Permits and tickets are handled</h4>
                                            <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="about-btn mt--30">
                                    <a className="btn-default" href="#">See our demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour
