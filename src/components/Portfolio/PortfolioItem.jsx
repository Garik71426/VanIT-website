import React, { Component } from 'react';
import propTypes from 'prop-types';

import Modal from './Modal';

import Grid from '@material-ui/core/Grid';

class PortfolioItem extends Component {
    render () {
        const { imgSrcMin, imgSrcMax, imgAlt } = this.props;
        return (
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12} className = 'portfolio--images--item' >
                <img src = {imgSrcMin} alt = {`VanIT Portfolio ${imgAlt}`} style = {{ height: '100%', width: '100%' }}/>
                <div className = 'portfolio--images--item--option'>
                    <Modal 
                        imgSrc = {imgSrcMax} 
                        imgAlt = {imgAlt}
                    />
                </div>
            </Grid>
        );
    }
}

PortfolioItem.propTypes = {
    imgSrcMin: propTypes.string.isRequired,
    imgSrcMax: propTypes.string.isRequired,
    imgAlt: propTypes.string.isRequired
};

export default PortfolioItem;