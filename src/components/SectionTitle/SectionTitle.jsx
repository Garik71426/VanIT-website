import React, { Component } from 'react';
import propTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import './SectionTitle.scss';

class SectionTitle extends Component {
    render () {
        const { title, text, color } = this.props;
        return (
            <Grid container style = {{ justifyContent: 'center' }} >
                <Grid item className = 'sectionTitle' style = { { color: color || 'black' } } xl={7} lg={7} md={9} sm={11} xs={11}>
                    <h1>{title}</h1>
                    <div></div>
                    <p>{text}</p>
                </Grid>
            </Grid>
        );
    }
}

SectionTitle.propTypes = {
    title: propTypes.string.isRequired,
    text: propTypes.string,
    color: propTypes.string
};

export default SectionTitle;