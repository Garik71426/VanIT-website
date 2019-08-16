import React, { Component } from 'react';
import propTypes from 'prop-types';

import Modal from './Modal';

import Grid from '@material-ui/core/Grid';

class PortfolioItem extends Component {
    render () {
        const { imgSrc, imgAlt } = this.props;
        return (
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12} className = 'portfolio--images--item' >
                <img src = {imgSrc} alt = {imgAlt} style = {{ height: '100%', width: '100%' }}/>
                <div className = 'portfolio--images--item--option'>
                    <Modal 
                        imgSrc = {imgSrc} 
                        imgAlt = {imgAlt}
                    />
                </div>
            </Grid>
        );
    }
}

PortfolioItem.propTypes = {
    imgSrc: propTypes.string.isRequired,
    imgAlt: propTypes.string.isRequired
};

export default PortfolioItem;