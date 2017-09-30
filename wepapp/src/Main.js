import React, {Component} from 'react';

import Header from './components/Header';
import Content from './components/Content';

// 리액트에서 데이터를 관리하는 방법
// 1. props -> 부모 컴포넌트로 부터 받은 자료
// 2. state -> 자신(본인) 컴포넌트가 관리하는 자료

class Main extends Component {
    
    render (){
        
        let title = 'React Application';
        let desc = 'Description';
        
        return(
            <div>
                <Header text={title} de={desc}/>
                <Content text={title}/>
            </div>
        )
    }
}

export default Main;