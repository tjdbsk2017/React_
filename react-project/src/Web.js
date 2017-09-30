import React, {Component} from 'react';

import Content from './Content';

class Web extends Component {
    
    render(){
        
        return(
            <div className="app">
                <h1>Data Handle</h1>
                <Content title = "Web Stack" />
            </div>
        )
    }
}

export default Web;