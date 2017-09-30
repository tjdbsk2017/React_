import React from 'react';

// jsx문법 xml기반의 코드로 html처럼 보이게함
// 리액트 컴포넌트는 항상 단일 구조여야 한다.
// {변수}
// 리액트에서 클래스를 만들때는 class가 아니라 className으로 작성해야 한다.
// 리액트 jsx문법에서는 if 나 for등을 사용할수 없다. 대신 삼항연산자는 가능하다.
// (조건) ? 참일때 실행 : 거짓일때 실행 -> 삼항식

class App extends React.Component {
    
    onPopup(){
        alert('a');
    }
    
    render(){
        
        let text = 'React';
        let check = false;
        
        return(
            <div>
                { check ? <h1>{text} true</h1> : <h1>{text} false</h1>}
                <h2 className="title" onClick={this.onPopup}>Welcome To {text} World</h2>
            </div>
        )
    }
}

export default App;