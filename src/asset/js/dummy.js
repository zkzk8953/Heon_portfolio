import ToDo from '../images/TODO.png';
import ToDo3 from '../images/TODO3.png';


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
        github : 'github.com/zkzk8953/Heon-toDoList',
        feStack : 'React, LocalStorage'
    },
    {
        title : "공새로",
        term : "2021.10 ~ (4人 팀 프로젝트)",
        photo : [
            {photoUrl: '../asset/images/TODO.png'},{photoUrl: '사진2'},{photoUrl : '사진3'}
        ],
        description : [ 
            {des : ''},
            {des : ''},
            {des : ''},
            {des : ''}
        ],
        mainFunc : '카카오맵 api를 이용한 건설현장 매칭기능, 아임포트 이용 결제기능, socket.io 이용 채팅기능',
        github : '깃헙주소',
        feStack : 'React, Context Api, ',
        beStack : 'AqueryTool, Intellij, Java Spring'
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
        mainFunc : '주요기능',
        github : '깃헙주소',
        feStack : '프론트엔드 기술 스택'
    }
]