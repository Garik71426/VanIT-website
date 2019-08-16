import React from 'react';

import propTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';
 
const theme = createMuiTheme();
 
class PaginationImgs extends React.Component {
    render () {
        const { maxPage, offset, handleClick } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Pagination
                    limit={1}
                    offset={offset}
                    total={maxPage}
                    onClick={(e, offset) => handleClick(offset)}
                />
            </MuiThemeProvider>
        );
    }
}

PaginationImgs.propTypes = {
    maxPage: propTypes.number.isRequired,
    offset: propTypes.number.isRequired,
    handleClick: propTypes.func.isRequired
};

export default PaginationImgs;