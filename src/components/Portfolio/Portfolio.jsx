import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';
import PortfolioItem from './PortfolioItem';
import PaginationImgs from './PaginationImgs';

import images from './data';

import Grid from '@material-ui/core/Grid';

import './Portfolio.scss';

class Portfolio extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            offset: 0,
            pageItems: window.innerWidth > 1279 ? 6 : 4
        };
    }

    componentDidMount () {
        window.addEventListener('resize', this.updatePageItems);
    }

    componentWillUnmount () {
        window.removeEventListener('resize');
    }
 
    handleClick = offset => {
        this.setState({ offset });
    }

    updatePageItems = () => {
        this.setState({
            pageItems: window.innerWidth > 1279 ? 6 : 4
        });
    };

    render () {
        const { offset, pageItems } = this.state;
        const maxPage = Math.ceil(images.length / pageItems);
        const mapStart = offset * pageItems;
        const mapEnd = mapStart + pageItems;
        return (
            <div className='portfolio' id = 'portfolio'>
                <SectionTitle 
                    title = "Portfolio"
                    text = 'We create solutions that  follow the latest digital trends. Here are some projects completed by our team.'
                    color = '#476569'
                />
                <Grid container className = 'portfolio--images'>
                    {images.slice(mapStart, mapEnd).map(item => {
                        return <PortfolioItem 
                            key = {item.src} 
                            imgSrcMin = {item.srcMin}
                            imgSrcMax = {item.srcMax} 
                            imgAlt = {item.alt}
                        />;
                    })}
                </Grid>
                {images.length > pageItems && <PaginationImgs 
                    maxPage = {maxPage} 
                    offset = {offset} 
                    handleClick = {this.handleClick}
                />}
            </div>      
        );
    }
}

export default Portfolio;