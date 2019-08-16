import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import SectionTitle from '../SectionTitle';

import data from './data';

import './Services.scss';

class Services extends Component {
    render () {
        return (
            <div className='services' id = 'services'>
                <SectionTitle 
                    title = "Services"
                    text = 'VanIt offers a wide set of Web development services from creating simple company sites to corporate business process automation solutions with interactive UI and complex backend. As well as we have a reliable team with deep expertise in Android and iOS development. We will help you invent the future.'
                    color = '#476569'
                />
                <Grid container className = 'services--container'>
                    {data.map(item => {
                        return <Grid item xl={3} lg={3} md={4} sm={4} xs={6} key = {item.src}>
                            <div className='services--content'>
                                <div className='services--logo'>
                                    <img src = {item.src} alt = {item.alt}/>
                                </div>
                                <div className='services--category'>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        </Grid>;      
                    })}
                </Grid>
            </div>    
        );
    }
}

export default Services;