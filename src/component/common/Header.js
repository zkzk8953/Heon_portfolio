/* eslint-disable */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react';
//library
import { useMediaQuery } from 'react-responsive';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
//css
import '../../asset/css/common.scss';


export default function Header () {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isClick, setIsClick] = useState(false);
    const [menuList, setMenuList] = useState([
        {
            id: 1,
            title: "About me",
            active: false,
            top: 800,
            mTop: 736
        },
        {
            id: 2,
            title: "Skills",
            active: false,
            top: 1276,
            mTop: 1852
        },
        {
            id: 3,
            title: "Project",
            active: false,
            link : "/contact",
            top: 2200,
            mTop : 2473
        },
        {
            id: 4,
            title: "Archiving",
            active: false,
            link : "/contact",
            top: 3690,
            mTop : 5107
        },
        {
            id: 5,
            title: "Career",
            active: false,
            link : "/contact",
            top: 4240,
            mTop: 6015
        }
    ]);
    const isResponsive = useMediaQuery({
        query: "(max-width : 1080px)",
    });


    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    const mobileMenuFnc = () => {
        if(isClick === false){
            setIsClick(true)
        }else{
            setIsClick(false)
        }
    };


    useEffect (()=> {
        window.addEventListener('scroll', updateScroll);
    }, []);

   

    return (
        <div className={scrollPosition < 15 ? "header_wrap" : "header_wrap_mvn" }>
            {isResponsive 
            ?(            
            <ul className={isClick ? 'mobile_ul' : 'mobile_ul_off'}>
                {menuList.map((data, i)=>{
                    return (
                        <li 
                            key={data.id}
                            className="mobile_menu"
                        >
                            <Link to={data.id} spy={true} smooth={true} onClick={()=>{
                                window.scrollTo({left:0, top:data.mTop, behavior :'smooth'});
                                setIsClick(false)
                            }}>
                            {data.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            ) 
            : null
            }
            <div className="header_container">
                <h1 onClick={()=>{
                     window.scrollTo({left:0, top:0, behavior :'smooth'});
                     setIsClick(false)
                }}>SH's Portfolio</h1>
                {isResponsive
                 ? (
                <p 
                    className='menu' 
                    onClick={mobileMenuFnc}
                >
                    <FontAwesomeIcon className='bars' icon={faBars} size='2x' />
                </p> 
                 ) 
                 : (
                <ul className="main_nav">
                    {menuList.map((data, i)=>{
                        return (
                            <li 
                                key={data.id}
                                to={data.link} 
                                className={scrollPosition > 15 ? "active_font" : "none"}
                            >
                                <Link to={data.id} spy={true} smooth={true}>
                                    {data.title}
                                </Link>
                                </li>
                        )
                    })}
                </ul>
                 )
                 }
            </div>
        </div>
    )
}