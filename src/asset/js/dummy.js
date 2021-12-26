import ToDo from '../images/TODO.png';
import ToDo3 from '../images/TODO3.png';
import Gong1 from '../images/gong5.png';
import Gong2 from '../images/gong2.png';
import Gong3 from '../images/gong3.png';
import Gong4 from '../images/gong4.png';

//section2 data
export const projectData = [
    {
        title : "To-Do-List",
        term : "2021.08 (개인 프로젝트)",
        photo : [
            {photoUrl: ToDo},{photoUrl : ToDo3}
        ],
        description : [ 
            {des : '프론트 엔드 개발자로서의 기본적인 소양을 기르기 위해 만든 투투리스트 입니다. 할일을 추가하거나 삭제하는 기능은 물론이고, 수정과 전체삭제 등의 기능을 만들어 편리함을 제공하였습니다. (localStorage를 이용하여 백엔드 없이 프론트 엔드 작업만으로 기능을 완성하였습니다.)'},
            {des : '메뉴 버튼을 눌러 맵이라는 페이지에 들어가면 구글맵 api를 사용하여 특정 위치를 저장할 수 있는 기능을 사용할 수 있습니다. '},
            {des : 'CRUD의 연습과 특정 라이브러리를 사용하여 실무에 투입될 수 있는 능력을 키우는 것을 목적으로 시작한 프로젝트이지만, 직접 사용하는 일이 잦아지면서 실제로 사용 가능한 투두리스트 앱을 만드는 것을 최종 목표로 삼고 꾸준히 개발중인 프로젝트 입니다.'},
        ],
        mainFunc : '할일 불러오기·추가·수정·삭제 기능(Storage), 맛집 등록하기 · 삭제 · 위치찾기(Google maps)',
        library  : 'LocalStorage, Google Maps ',
        github : 'https://github.com/zkzk8953/Heon-toDoList',
        feStack : 'React',

    },
    {
        title : "공새로",
        term : "2021.10 ~ (4人 팀 프로젝트)",
        photo : [
            {photoUrl: Gong1},{photoUrl : Gong4}, {photoUrl: Gong2},{photoUrl : Gong3}, 
        ],
        description : [ 
            {des : '공새로는 건설 현장과 건자재 공급사 간 거래를 중개하는 플랫폼으로 2명의 백엔드 개발자와 2명의 프론트 개발자로 팀을 구성하여 진행한 반응형 웹/앱 프로젝트입니다. '},
            {des : '전체적으로는 1개의 프로젝트지만 세부적으로는 랜딩 페이지, 고객 페이지, 제휴사 페이지, 관리자 페이지로 나뉘었고, 랜딩 페이지를 제외한 나머지 프로젝트의 프론트 작업을 본인이 진행하였습니다.'},
            {des : '쿠키를 이용한 로그인 기능과 회원가입 기능, 결제 시스템, 카카오맵 라이브러리를 사용한 맵서비스, 엑셀 라이브러리를 이용한 입력폼 등을 구현하였습니다.'},
            {des : '프로젝트를 진행하면서 협업과 관련된 경험을 쌓을 수 있었고, 목적에 맞는 서비스를 구현하기 위해서 기획자와 개발자들 간의 소통이 얼마나 중요한지 깨닫게 되었습니다.'}
        ],
        mainFunc : '카카오맵 api를 이용한 건설현장 매칭기능, 아임포트 이용 결제기능, socket.io 이용 채팅기능',
        library  : 'Axios, Kakao Maps, iamport, excel.js, chart.js, js-Cookies, daum-postcode  ',
        github : 'https://github.com/zkzk8953/Gongsaero',
        feStack : 'React, Context Api ',
        beStack : 'AqueryTool, Intellij, Java Spring',
        video : 'yes'
    },
    {
        title : "포트폴리오 웹사이트",
        term : "2021.12 (개인 프로젝트)",
        photo : [
            {photoUrl: '../asset/images/TODO.png'},{photoUrl: '사진2'},{photoUrl : '사진3'}
        ],
        description : [ 
            {des : ''},
            {des : ''},
            {des : ''},
            {des : ''}
        ],
        library  : 'Axios, Kakao maps, iamport, excel,   ',
        mainFunc : '주요기능',
        github : '깃헙주소',
        feStack : '프론트엔드 기술 스택'
    }
]