import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component{
    render(){
        return (

            <div>
            <Header title="Hi Tejomay"/>
            <Footer value="bye"/>
            </div>

    )
    }
}