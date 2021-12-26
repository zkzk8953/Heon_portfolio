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


SwiperCore.use([Pagination]); // *

export default function Main () {
    const [isOver, setIsOver] = useState(false);
    const [isOpen, setIsOpen] = useState(true);



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
                    <p>안녕하세요 ! <br /> 현재에 안주하지 않고, 끊임없이 발전하는 <br /> 프론트엔드 개발자 이성헌입니다.</p>
                </div>
                <button>MORE <FontAwesomeIcon icon={faChevronDown} size='sm' /></button>
            </div>
            <div className="main_section2 section">
                <h2>ABOUT ME</h2>
                <div className='section2_contents'>
                    <div className='contents1 contents'>
                        <div className='contents_box'>
                            <p><FontAwesomeIcon className='fa_icon' icon={faUser} size="2x"/></p>
                            <dl>
                                <dt>NAME</dt>
                                <dd>이성헌</dd>
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
                                <dd>인천광역시 미추홀구</dd>
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
                                <img src={IMG1} alt='프론트엔드 아이콘'/>
                            </div>
                        </div>
                    </div>
                    <div className='center_contents side'>
                        <div className='skill_box2 box'>
                            <h3>Back-end</h3>
                            <div className='skill2 actual'>
                                <img src={IMG2} alt='백엔드 아이콘'/>
                            </div>
                        </div>
                        <div className='skill_box2 box'>
                            <h3>Community</h3>
                            <div className='skill2 actual'>
                                <img src={IMG5} alt='커뮤니티 아이콘'/>
                            </div>
                        </div>
                    </div>
                    <div className='right_contents side'>
                        <div className='skill_box3 box'>
                            <h3>Version Control</h3>
                            <div className='skill3 actual'>
                                <img src={IMG3} alt='깃 아이콘'/>
                            </div>
                        </div>
                        <div className='skill_box4 box'>
                            <h3>Graphic</h3>
                            <div className='skill4 actual'>
                                <img src={IMG4} alt='깃허브 아이콘'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_section4 section">
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
                                                <img src={obj.photoUrl} alt="프로젝트 이미지" />
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
                                        <dt>✔ 주요기능</dt>
                                        <dd>{data.mainFunc}</dd>
                                    </dl>
                                    <dl>
                                        <dt>✔ GitHub</dt>
                                        <dd><a href={data.github} rel="noreferrer noopener" target="_blank">{data.github}</a></dd>
                                    </dl>
                                    <dl>
                                        <dt>✔ 라이브러리</dt>
                                        <dd>{data.library}</dd>
                                    </dl>
                                    <dl>
                                        <dt>✔ Front-end</dt>
                                        <dd>{data.feStack}</dd>
                                    </dl>
                                    {data.beStack &&                                     
                                    <dl>
                                        <dt>✔ Back-end</dt>
                                        <dd>{data.beStack}</dd>
                                    </dl>}
                                    {data.video &&
                                    <dl>
                                        <dt>✔ Video</dt>
                                        <dd style={{'color':'#189bfa','cursor':'pointer'}} onClick={()=>{setIsOpen(true);}}>영상보기</dd>
                                    </dl>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="main_section5 section">
                <h2>ARCHIVING</h2>
                <div className='section5_contents'>
                    <div className='archiving_box'>
                        <h3><img src={IMG6} alt="깃허브 아이콘" /></h3>
                        <p><a href="https://github.com/zkzk8953" rel="noreferrer noopener" target="_blank">https://github.com/zkzk8953</a></p>
                        <p><span>소스코드 저장소 주소</span>입니다.</p>
                        <ul>
                            <li>❔ 프로젝트 기획을 보고 연습하던 소스 코드</li>
                            <li>❔ 개인 공부를 진행하며 코딩했던 소스 코드</li>
                            <li>❔ 여러 라이브러리를 예습하기 위한 코드</li>
                        </ul>
                    </div>
                    <div className='archiving_box'>
                        <h3><img src={IMG7} alt="티스토리 아이콘"/></h3>
                        <p><a href="https://hunsenal.tistory.com/" rel="noreferrer noopener" target="_blank">https://hunsenal.tistory.com/</a></p>
                        <p><span>공부 및 지식 정리 목적의 블로그</span>입니다.</p>
                        <ul>
                            <li>❔ 프로젝트에 들어가기전 예습, 복습을 위한 공간</li>
                            <li>❔ 내가 구현한 기능들을 온전히 나의 것으로 만들기</li>
                            <li>❔ 웹 개발자로서의 기반을 다지기 위한 지식 정리</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='main_section6 section'>
                <h2>CAREER</h2>
                <div className='career_contents'>
                    <div className='career_left'>
                        <p></p>
                    </div>
                    <div className='career_right'>
                        <div className='top_contents'>
                            <h3>(주)더빌드소프트</h3>
                            <p>2021.07 ~ 2021.12</p>
                            <p>다양한 웹/앱 솔루션 등을 기획부터 디자인, 개발, 실제 서비스, 유지보수까지 맡아 책임지는 회사입니다.</p>
                            <p>
                                신입 개발자로서 React를 기반으로한 프로젝트들의 퍼블리싱부터 시작하여 기능개발, 
                                API통신, 데이터 바인딩 등의 프론트 엔드 업무들을 도맡아서 해왔습니다. 
                                
                            </p>
                        </div>
                        <div className='btm_contents'>
                            <div className='career1'>
                                <h4>▎zero waste 관리자 페이지</h4>
                                <p>2020.07 ~ 2020.08</p>
                                <ul>
                                    <li>API 통신을 통한 데이터 바인딩을 담당.</li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className='career1'>
                                <h4>▎공새로 프로젝트</h4>
                                <p>2020.08 ~ (진행중)</p>
                                <ul>
                                    <li>프로젝트 전반의 프론트 엔드 업무 담당.</li>
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