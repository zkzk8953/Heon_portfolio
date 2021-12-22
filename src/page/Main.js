import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser, faBirthdayCake , faMapMarkerAlt, faPhoneSquare, faEnvelope, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
//style
import '../asset/css/main.css';
import '../asset/css/main.css';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/lazy/lazy.scss"

SwiperCore.use([Pagination]); // *

export default function Main () {
    const [isOver, setIsOver] = useState(false);
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
                    <p>안녕하세요 ! <br /> 현재에 안주하지 않고, 끊임없이 발전하는 <br /> 프론트엔드 개발자 이성헌입니다.</p>
                </div>
                <button>MORE <FontAwesomeIcon icon={faChevronDown} size='sm' /></button>
            </div>
            <div className="main_section2 section">
                <h2>ABOUT ME</h2>
                <div className='section2_contents'>
                    <div className='contents1 contents'>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon icon={faUser} size="2x"/></p>
                            <dl>
                                <dt>NAME</dt>
                                <dd>이성헌</dd>
                            </dl>
                        </div>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon icon={faBirthdayCake} size="2x" /></p>
                            <dl>
                                <dt>BIRTH</dt>
                                <dd>95.03.07</dd>
                            </dl>
                        </div>
                    </div>
                    <div className='contents2 contents'>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /></p>
                            <dl>
                                <dt>ADDRESS</dt>
                                <dd>인천광역시 미추홀구</dd>
                            </dl>
                        </div>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon icon={faPhoneSquare} size="2x" /></p>
                            <dl>
                                <dt>TEL</dt>
                                <dd>010 7794 2286</dd>
                            </dl>
                        </div>
                    </div>
                    <div className='contents3 contents'>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon icon={faEnvelope} size="2x"/></p>
                            <dl>
                                <dt>EMAIL</dt>
                                <dd>zkzk8953@naver.com</dd>
                            </dl>
                        </div>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon icon={faUserGraduate} size="2x"/></p>
                            <dl>
                                <dt>EDUCATION</dt>
                                <dd>단국대학교 운동처방재활</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_section3 section">
                <h2>SKILLS</h2>
                <div className='section3_contents'>
                    <div className='left_contents side'>
                        <div className='skill_box1 box' >
                            <h3>Front-end</h3>
                            <div className='skill1 actual'>
                                <p className='skill1_ul1'>{/* html,css,js images */}</p>
                                <p className='skill1_ul2'>{/* react images */}</p>
                                <p className='skill1_ul3'>{/* redux images */}</p>
                                <ul className='skill1_ul'>
                                    <li>{/* jquery images */}</li>
                                    <li>{/* sass images */}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='center_contents side'>
                        <div className='skill_box2 box'>
                            <h3>Back-end</h3>
                            <div className='skill2 actual'>
                                <p>{/* node images */}</p>
                                <p>{/* mongodb images */}</p>
                            </div>
                        </div>
                    </div>
                    <div className='right_contents side'>
                        <div className='skill_box3 box'>
                            <h3>Version Control</h3>
                            <div className='skill3 actual'>
                                <p>{/* git images */}</p>
                                <p>{/* github images */}</p>
                            </div>
                        </div>
                        <div className='skill_box4 box'>
                            <h3>graphic</h3>
                            <div className='skill4 actual'>
                                <ul className='skill1_ul2'>
                                    <li>{/* photoshop images */}</li>
                                    <li>{/* illorstrator images */}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_section4 section">
                <h2>PROJECT</h2>
                <div className='project_contents'>
                    <h3>To-Do-List</h3>
                    <p>2021.08 (개인 프로젝트)</p>
                    <div className='project_side'>
                        <div className='project_left'>
                            <Swiper
                                className='swiper-container'
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{clickable: true}}
                            >
                                <SwiperSlide>사진1</SwiperSlide>
                                <SwiperSlide>사진2</SwiperSlide>
                                <SwiperSlide>사진3</SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='project_right'>
                            <p>설명 문단</p>
                            <div className='stack'>
                                <dl>
                                    <dt>✔ 주요기능</dt>
                                    <dd>주요기능 설명</dd>
                                </dl>
                                <dl>
                                    <dt>✔ GitHub</dt>
                                    <dd><a href="https://github.com/zkzk8953/Heon-toDoList">https://github.com/zkzk8953/Heon-toDoList</a></dd>
                                </dl>
                                <dl>
                                    <dt>✔ Front-end</dt>
                                    <dd>프론트엔드 기술스택</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project_contents'>
                    <h3>공새로</h3>
                    <p>2021.10 ~ (진행중)</p>
                    <div className='project_side'>
                        <div className='project_left'>
                            <Swiper
                                className='swiper-container'
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{clickable: true}}
                            >
                                <SwiperSlide>사진1</SwiperSlide>
                                <SwiperSlide>사진2</SwiperSlide>
                                <SwiperSlide>사진3</SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='project_right'>
                            <p>설명 문단</p>
                            <div className='stack'>
                                <dl>
                                    <dt>✔ 주요기능</dt>
                                    <dd>주요기능 설명</dd>
                                </dl>
                                <dl>
                                    <dt>✔ GitHub</dt>
                                    <dd>깃허브 주소</dd>
                                </dl>
                                <dl>
                                    <dt>✔ Front-end</dt>
                                    <dd>React, Axios, Context Api</dd>
                                </dl>
                                <dl>
                                    <dt>✔ Back-end</dt>
                                    <dd>React, Axios, Context Api</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project_contents'>
                    <h3>포트폴리오 웹사이트</h3>
                    <p>2021.12 (개인 프로젝트)</p>
                    <div className='project_side'>
                        <div className='project_left'>
                            <Swiper
                                className='swiper-container'
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{clickable: true}}
                            >
                                <SwiperSlide>사진1</SwiperSlide>
                                <SwiperSlide>사진2</SwiperSlide>
                                <SwiperSlide>사진3</SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='project_right'>
                            <p>설명 문단</p>
                            <div className='stack'>
                                <dl>
                                    <dt>✔ 주요기능</dt>
                                    <dd>주요기능 설명</dd>
                                </dl>
                                <dl>
                                    <dt>✔ GitHub</dt>
                                    <dd>깃허브 주소</dd>
                                </dl>
                                <dl>
                                    <dt>✔ Front-end</dt>
                                    <dd>프론트엔드 기술스택</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_section5 section">
                <h2>ARCHIVING</h2>
                <div className='section5_contents'>
                    <div className='archiving_box'>
                        <h3>{/* img */}</h3>
                        <p><a href="https://github.com/zkzk8953/Heon-toDoList">https://github.com/zkzk8953/Heon-toDoList</a></p>
                        <p>깃허브 주소입니다.</p>
                        <ul>
                            <li>❔</li>
                            <li>❔</li>
                            <li>❔</li>
                        </ul>
                    </div>
                    <div className='archiving_box'>
                        <h3>{/* img */}</h3>
                        <p><a href="https://github.com/zkzk8953/Heon-toDoList">https://github.com/zkzk8953/Heon-toDoList</a></p>
                        <p>개발블로그 주소입니다.</p>
                        <ul>
                            <li>❔</li>
                            <li>❔</li>
                            <li>❔</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='main_section6 section'>
                <h2>CAREER</h2>
                <div className='carrer_contents'>

                </div>
            </div>
        </>
    )
}