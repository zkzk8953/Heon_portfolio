import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect} from 'react';

import '../../asset/css/common.scss';

export default function Popup ({setIsOpen}) {

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
                    }}><FontAwesomeIcon icon={faTimes} size='2x'/></p>
                </div>
                <div className='popup_btm'>
                    <div className='video_wrap'>
                        <video />   
                    </div>
                    <ul>
                        <li>첫번째 비디오</li>    
                        <li>두번째 비디오</li>    
                        <li>세번째 비디오</li>    
                        <li>네번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                        <li>다섯번째 비디오</li>    
                    </ul> 
                </div>
            </div>
        </div>
    )
};