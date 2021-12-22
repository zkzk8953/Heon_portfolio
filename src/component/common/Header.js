/* eslint-disable */

import React, {useEffect, useState} from 'react';
//library
import { Link } from 'react-router-dom';
//css
import '../../asset/css/common.scss';


export default function Header () {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuList, setMenuList] = useState([
        {
            id: 0,
            title: "About me",
            active: false,
            link : "/"
        },
        {
            id: 1,
            title: "Skills",
            active: false,
            link : "/potfolio"
        },
        {
            id: 2,
            title: "Project",
            active: false,
            link : "/contact"
        },
        {
            id: 3,
            title: "Archiving",
            active: false,
            link : "/contact"
        },
        {
            id: 3,
            title: "Career",
            active: false,
            link : "/contact"
        }
    ]);


    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };


    useEffect (()=> {
        window.addEventListener('scroll', updateScroll);
    }, []);



    return (
        <div className={scrollPosition < 15 ? "header_wrap" : "header_wrap_mvn" }>
            <div className="header_container">
                <h1>SH's Portfolio</h1>
                <ul className="main_nav">
                    {menuList.map((data, i)=>{
                        return (
                            <li key={data.id}><Link 
                                to={data.link} 
                                className={scrollPosition > 15 ? "active_font" : "none"}
                                onClick={()=>{

                                }}
                                >
                                {data.title}
                                </Link></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}