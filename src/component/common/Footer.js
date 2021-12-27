import React from 'react';
import IMG1 from '../../asset/images/GitHub-Mark.png';
import IMG2 from '../../asset/images/logo.png';
import IMG3 from '../../asset/images/tistory1.png';

//css
import '../../asset/css/common.scss';



export default function Footer () {
    return (
        <div className="footer_wrap">
            <div className='f_top'>
                <p><a href='https://github.com/zkzk8953' rel="noreferrer noopener" target="_blank"><img src={IMG1} alt='깃허브 아이콘' /></a></p>
                <p><a href='https://www.instagram.com/reasonhh' rel="noreferrer noopener" target="_blank"><img src={IMG2} alt='인스타그램 아이콘' /></a></p>
                <p><a href='https://hunsenal.tistory.com' rel="noreferrer noopener" target="_blank"><img src={IMG3} alt='티스토리 아이콘' /></a></p>
            </div>
            <div className='f_btm'>
                <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.</p>
                <p>©2021 LEE SEOUNG HEON. All Rights Reserved.</p>
            </div>
        </div>
    )
};