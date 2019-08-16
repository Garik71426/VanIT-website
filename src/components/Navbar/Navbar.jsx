import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import data from './data'

import './Navbar.scss';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}));
export default function PrimarySearchAppBar () {
    const [scrollClass, setScrollClass] = React.useState(false);
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const [prevScroll, setPrevScroll] = React.useState(document.documentElement.scrollTop);
    const [scrollDawn, setScrollDawn] = React.useState(false);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    function handleMobileMenuClose () {
        setMobileMoreAnchorEl(null);
    }

    function handleMobileMenuOpen (event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >   
            <MenuItem className = 'disabled-item' onClick = {handleMobileMenuClose}>
                <div></div>
            </MenuItem>;
            {data.map(item => {
                return <MenuItem key = {item.id}>
                    <a className="hiddenItems" onClick = {handleMobileMenuClose} href = {`#${item.id}`}>{item.title}</a>
                </MenuItem>;
            })}
        </Menu>
    );
    const headerHideOnscrolDawn = () => {
        if (document.documentElement.scrollTop > 100)
            if (document.documentElement.scrollTop > prevScroll) 
                setScrollDawn(true);
            else
                setScrollDawn(false);
        else 
            setScrollDawn(false);
        setPrevScroll(document.documentElement.scrollTop);
    };
    window.onscroll = () => scrollFunction();
    const scrollFunction = () => {
        let scroll;
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) 
            scroll = true;
        else 
            scroll = false;
        setScrollClass(scroll);
        headerHideOnscrolDawn();
    };
    return (
        <div className={`navigation ${classes.grow}`}>
            <AppBar position="static" className = {`navigation--${scrollClass ? 'scroll' : 'top'} ${scrollDawn ? 'hideHerder' : ''}`}>
                <Toolbar>
                    <a href="#home" className='navigation--logo' tabIndex = {1}>
                        <span className = 'logo'><span >V</span>anIT</span>
                    </a>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {data.map(item => {
                            return <a href = {`#${item.id}`} tabIndex = {1} key = {item.id}>{item.title}</a>;
                        })}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="Show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}