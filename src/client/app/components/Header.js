import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header>
                {console.log(this.props)}
                {this.props.title}
            </header>
        );
    }

}