import React, { Component } from 'react';

import PrimarySearchAppBar from './../Navbar/Navbar';
import SectionTitle from '../SectionTitle';

import './Home.scss';

class Home extends Component {
    render () { 
        const text = 'The software engineering company that transforms your initial ideas into final products. Each and every single member of our talented professional team becomes your own team player by making his/her own contribution to the achievement of our shared goal and creation of your success story.';
        return (
            <>
            <PrimarySearchAppBar />
            <div className='home' ref = {this.myRef} id = 'home'>
                <SectionTitle title = 'We make IT happen' text = {text} color = '#DBF5F8'/>
                <a href='#portfolio' className='home--button'>Our Works</a>
            </div>
            </>
        );
    }
}
export default Home;