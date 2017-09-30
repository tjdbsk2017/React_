import React, {Component} from 'react';

import Htag from './Htag';
import Ptag from './Ptag';

class Header extends Component {
    
    render(){
        
        let cc = this.props.text;
        
        return(
            <div>
                {cc} Header {this.props.de}
                <Htag aa={cc}/>
                <Ptag bb={cc}/>
            </div>
        )
    }
}

export default Header;