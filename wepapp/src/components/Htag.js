import React, {Component} from 'react';
import Child from './Child';

// state
// 내부에서만 사용이 가능한 데이터
// 리액트 컴포넌트에서 state가 변경되면 재렌더링을 한다.
// 단, 데이터를 변경하고자 할때는 setState 메소드를 반드시 사용해야한다.


class Htag extends Component {
    
    constructor(){
        super();
        // 최초실행시 처음 동작하는 메소드
        this.state = {
            number : 10,
        }
    }
    
    handleClick(){
//        alert('증가버튼을 눌렀습니다.');
        this.setState({ number : this.state.number+1 });
    }
    
    render(){
        return(
            <div>
                <div>부모컴포넌트가 준 데이터는 {this.props.aa}</div>
                <div>{this.state.number}</div>
                <Child num={this.state.number}/>
                <button onClick={this.handleClick.bind(this)}>숫자 증가</button>
            </div>
        )
    }
}

export default Htag;