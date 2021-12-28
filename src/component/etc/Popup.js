import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react';
import { VideoList } from '../../asset/js/dummy';

import '../../asset/css/common.scss';

export default function Popup ({setIsOpen}) {
    const [nowPlay, setNowPlay] = useState({
        nowVideo : null,
    });



    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);


    return (
        <div className='popup_wrap'>
            <div className='popup_container'>
                <div className='popup_top'>
                    <h1>영상보기</h1>
                    <p onClick={()=>{
                        setIsOpen(false);
                    }}><FontAwesomeIcon icon={faTimes} size='2x' className='popup_icon'/></p>
                </div>
                <div className='popup_btm'>
                    <div className='video_wrap'>
                        <video src={nowPlay.nowVideo} muted loop autoPlay />   
                    </div>
                    <ul>
                        {VideoList.map((data, i) => {
                            return (
                                <li key={data.title} onClick={()=>{
                                    setNowPlay({...nowPlay, nowVideo : data.video});
                                }}>{data.title}</li>
                            )
                        })}  
                    </ul> 
                </div>
            </div>
        </div>
    )
};