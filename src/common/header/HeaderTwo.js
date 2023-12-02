import {useState, useRef} from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import MobileMenu from './MobileMenu';

const HeaderTwo = ({btnStyle, HeaderSTyle}) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }


    const ref = useRef();
    let [check, setCheck] = useState(true);
    const headerClasses = `header-default`
    const { clientHeight } = ref;
    
    const checkChange = (value) => {
      setCheck(value);
    };


    return (
        <>
            <header ref={ref} className={`rn-header header-default header-left-align ${HeaderSTyle} ${headerClasses}`}>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-6 col-4 position-static">
                            <div className="header d-flex">
                                <Logo 
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                    image2={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                />
                            </div>
                        </div>
                    
                    </div>
                </div>
            </header>
            <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  />
        </>
    )
}
export default HeaderTwo;