
//import React, {Component} from 'react';
//class App extends Component {

//}

import React from 'react';
class App extends React.Component {
    
    /*
    라이플 사이클
    
    리액트 문법을 통해서 화면에 그려지기 까지의 동작 순서 가지고 있는 함수
    리액트에서 다시 랜더링이 될때 동작 되는 함수
    */
    
    constructor(){
        super();
    }
    
    componentWillMount(){
        // 컴포넌트를 통해서 HTML이 만들어지기전에 실행된다.
        let a = document.getElementsByTagName('h1');
        console.log(a);
    }
    
    componentDidMount(){
        // 첫 렌더링이 끝나고 실행되는 부분
        let a = document.getElementsByTagName('h1');
        console.log(a);
    }    
    
    componentWillReceiveProps(){
        // 컴포넌트가 props를 새로 받았을때
        // this.setState()를 쓰지 않는다. - 무한루프에 빠질수있다
    }
    
    shouldComponentUpdate(){
        // 다시 랜더링을 할지 말지 선택하는 메소드
    }
    
    componentWillUpdate(){
        // 컴포넌트가 업데이트 되기전에 실행
        // this.setState() 절대 사용하면 안된다. - 무한루프에 빠짐
    }
    
    componentDidUpdate(){
        // 컴포넌트가 업데이트 후 실행
    }
    
    componentWillUnmount(){
        // DOM(컴포넌트)을 사라지고 실행되는 부분.
    }
    
    _componentSlider(){
        // 커스텀 메소드를 만들고 싶을때 _로 구별해준다.
    }
    
    render(){
        return(
            <h1>Application</h1>
        )
    }
}

export default App;