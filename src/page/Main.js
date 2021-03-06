import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser, faBirthdayCake , faMapMarkerAlt, faPhoneSquare, faEnvelope, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { projectData } from '../asset/js/dummy';
//images
import IMG1 from '../asset/images/1_01.jpg';
import IMG2 from '../asset/images/02_01.jpg';
import IMG3 from '../asset/images/03_01.jpg';
import IMG4 from '../asset/images/04_01.jpg';
import IMG5 from '../asset/images/05_01.jpg';
import IMG6 from '../asset/images/git-hub.png';
import IMG7 from '../asset/images/tistory.png';
//style
import '../asset/css/main.scss';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/lazy/lazy.scss"
import Popup from '../component/etc/Popup';
import { Link } from 'react-scroll';


SwiperCore.use([Pagination]); // *

export default function Main () {
    const [isOver, setIsOver] = useState(false);
    const [isOpen, setIsOpen] = useState(false);



    // const [scrollPosition, setScrollPosition] = useState(0);

/*     const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }; */


    useEffect (()=> {
        window.scrollTo(0, 0);
    }, []);




    return (
        <>
            {isOpen && <Popup setIsOpen={setIsOpen} />}
            <div className="main_section1">
                <div className='filter'></div>
                <div 
                    className={!isOver ? "intro" : "intro_mvn"} 
                    onMouseEnter={()=>{
                        setIsOver(true);
                    }}
                    onMouseLeave={()=>{
                        setIsOver(false);
                    }}
                >
                    <span className="text_one">WEB FRONT-END</span>
                    <span className="text_two">DEVELOPER </span>
                    <span className="text_three">SEOUNG HEON</span>
                </div>
                <div className='section1_text'>
                    <p>??????????????? ! <br /> ????????? ???????????? ??????, ???????????? ???????????? <br /> ??????????????? ????????? ??????????????????.</p>
                </div>
                <Link to='1' spy={true} smooth={true}><button>MORE <FontAwesomeIcon icon={faChevronDown} size='sm' /></button></Link>
            </div>
            <div className="main_section2 section" id="1">
                <h2>ABOUT ME</h2>
                <div className='section2_contents'>
                    <div className='contents1 contents'>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon className='fa_icon' icon={faUser} size="2x"/></p>
                            <dl>
                                <dt>NAME</dt>
                                <dd>?????????</dd>
                            </dl>
                        </div>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon className='fa_icon' icon={faBirthdayCake} size="2x" /></p>
                            <dl>
                                <dt>BIRTH</dt>
                                <dd>1995.03.07</dd>
                            </dl>
                        </div>
                    </div>
                    <div className='contents2 contents'>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon className='fa_icon' icon={faMapMarkerAlt} size="2x" /></p>
                            <dl>
                                <dt>ADDRESS</dt>
                                <dd>??????????????? ????????????</dd>
                            </dl>
                        </div>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon className='fa_icon' icon={faPhoneSquare} size="2x" /></p>
                            <dl>
                                <dt>TEL</dt>
                                <dd>010 7794 2286</dd>
                            </dl>
                        </div>
                    </div>
                    <div className='contents3 contents'>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon className='fa_icon' icon={faEnvelope} size="2x"/></p>
                            <dl>
                                <dt>EMAIL</dt>
                                <dd>zkzk8953@naver.com</dd>
                            </dl>
                        </div>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon className='fa_icon' icon={faUserGraduate} size="2x"/></p>
                            <dl>
                                <dt>EDUCATION</dt>
                                <dd>??????????????? ??????????????????</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_section3 section" id="2">
                <h2>SKILLS</h2>
                <div className='section3_contents'>
                    <div className='left_contents side'>
                        <div className='skill_box1 box' >
                            <h3>Front-end</h3>
                            <div className='skill1 actual'>
                                <img src={IMG1} alt='??????????????? ?????????'/>
                            </div>
                        </div>
                    </div>
                    <div className='center_contents side'>
                        <div className='skill_box2 box'>
                            <h3>Back-end</h3>
                            <div className='skill2 actual'>
                                <img src={IMG2} alt='????????? ?????????'/>
                            </div>
                        </div>
                        <div className='skill_box2 box'>
                            <h3>Community</h3>
                            <div className='skill2 actual'>
                                <img src={IMG5} alt='???????????? ?????????'/>
                            </div>
                        </div>
                    </div>
                    <div className='right_contents side'>
                        <div className='skill_box3 box'>
                            <h3>Version Control</h3>
                            <div className='skill3 actual'>
                                <img src={IMG3} alt='??? ?????????'/>
                            </div>
                        </div>
                        <div className='skill_box4 box'>
                            <h3>Graphic</h3>
                            <div className='skill4 actual'>
                                <img src={IMG4} alt='????????? ?????????'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_section4 section" id="3">
                <h2>PROJECT</h2>
                {projectData.map((data, i) => {
                    return (
                    <div className='project_contents' key={data.term}>
                        <h3>{data.title}</h3>
                        <p>{data.term}</p>
                        <div className='project_side'>
                            <div className='project_left'>
                                <Swiper
                                    className='swiper-container'
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    pagination={{clickable: true}}
                                >
                                    {data.photo.map((obj , index)=>{
                                        return (
                                            <SwiperSlide key={obj.photoUrl}>
                                                <img src={obj.photoUrl} alt="???????????? ?????????" />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                            <div className='project_right'>
                                <p>
                                    {data.description.map((obj, index) => {
                                        return (
                                            <span key={index}>{obj.des}</span>
                                        )
                                    })}
                                </p>
                                <div className='stack'>
                                    <dl>
                                        <dt>??? ????????????</dt>
                                        <dd>{data.mainFunc}</dd>
                                    </dl>
                                    <dl>
                                        <dt>??? GitHub</dt>
                                        <dd><a href={data.github} rel="noreferrer noopener" target="_blank">{data.github}</a></dd>
                                    </dl>
                                    <dl>
                                        <dt>??? ???????????????</dt>
                                        <dd>{data.library}</dd>
                                    </dl>
                                    <dl>
                                        <dt>??? Front-end</dt>
                                        <dd>{data.feStack}</dd>
                                    </dl>
                                    {data.beStack &&                                     
                                    <dl>
                                        <dt>??? Back-end</dt>
                                        <dd>{data.beStack}</dd>
                                    </dl>}
                                    {data.video &&
                                    <dl>
                                        <dt>??? Video</dt>
                                        <dd style={{'color':'#189bfa','cursor':'pointer'}} onClick={()=>{setIsOpen(true);}}>????????????</dd>
                                    </dl>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="main_section5 section" id="4">
                <h2>ARCHIVING</h2>
                <div className='section5_contents'>
                    <div className='archiving_box'>
                        <h3><img src={IMG6} alt="????????? ?????????" /></h3>
                        <p><a href="https://github.com/zkzk8953" rel="noreferrer noopener" target="_blank">https://github.com/zkzk8953</a></p>
                        <p><span>???????????? ????????? ??????</span>?????????.</p>
                        <ul>
                            <li>??? ???????????? ????????? ?????? ???????????? ?????? ??????</li>
                            <li>??? ?????? ????????? ???????????? ???????????? ?????? ??????</li>
                            <li>??? ?????? ?????????????????? ???????????? ?????? ??????</li>
                        </ul>
                    </div>
                    <div className='archiving_box'>
                        <h3><img src={IMG7} alt="???????????? ?????????"/></h3>
                        <p><a href="https://hunsenal.tistory.com/" rel="noreferrer noopener" target="_blank">https://hunsenal.tistory.com/</a></p>
                        <p><span>?????? ??? ?????? ?????? ????????? ?????????</span>?????????.</p>
                        <ul>
                            <li>??? ??????????????? ??????????????? ??????, ????????? ?????? ??????</li>
                            <li>??? ?????? ????????? ???????????? ????????? ?????? ????????? ?????????</li>
                            <li>??? ??? ?????????????????? ????????? ????????? ?????? ?????? ??????</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='main_section6 section' id="5">
                <h2>CAREER</h2>
                <div className='career_contents'>
                    <div className='career_left'>
                        <p></p>
                    </div>
                    <div className='career_right'>
                        <div className='top_contents'>
                            <h3>(???)??????????????????</h3>
                            <p>2021.07 ~ 2021.12</p>
                            <p>????????? ???/??? ????????? ?????? ???????????? ?????????, ??????, ?????? ?????????, ?????????????????? ?????? ???????????? ???????????????.</p>
                            <p>
                                ?????? ??????????????? React??? ??????????????? ?????????????????? ?????????????????? ???????????? ????????????, 
                                API??????, ????????? ????????? ?????? ????????? ?????? ???????????? ???????????? ???????????????. 
                                
                            </p>
                        </div>
                        <div className='btm_contents'>
                            <div className='career1'>
                                <h4>???zero waste ????????? ?????????</h4>
                                <p>2020.07 ~ 2020.08</p>
                                <ul>
                                    <li>API ????????? ?????? ????????? ???????????? ??????.</li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className='career1'>
                                <h4>???????????? ????????????</h4>
                                <p>2020.08 ~ (?????????)</p>
                                <ul>
                                    <li>???????????? ????????? ????????? ?????? ?????? ??????.</li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}