import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//css
import '../asset/css/main.css';



export default function Main () {
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };


    useEffect (()=> {
        window.addEventListener('scroll', updateScroll);
    }, []);



    return (
        <>
            <div className="main_section1">
                <div className='filter'></div>
                <div className={scrollPosition < 15 ? "intro" : "intro_mvn"}>
                    <span className="text_one">WEB FRONT-END</span>
                    <span className="text_two">DEVELOPER </span>
                    <span className="text_three">SEOUNG HEON</span>
                </div>
                <div className='section1_text'>
                    <p>안녕하세요. <br /> 현재에 안주하지 않고, 끊임없이 발전하는 <br /> 프론트엔드 개발자 이성헌입니다</p>
                </div>
                <button>MORE </button>
            </div>
            <div className="main_section2 section">
                <h2>ABOUT ME</h2>
            </div>
            <div className="main_section3 section">
                <h2>SKILLS</h2>
            </div>
            <div className="main_section4 section">
                <h2>PROJECT</h2>
            </div>
            <div className="main_section5 section">
                <h2>ARCHIVING</h2>
            </div>
        </>
    )
}