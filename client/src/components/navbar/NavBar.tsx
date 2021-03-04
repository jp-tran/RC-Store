import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { AppBar, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import NavBarButtons from './NavBarButtons';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      position: 'sticky',
      top: 0,
      display: 'flex',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'none',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 1,
        width: '100%',
        background: 'linear-gradient(to right, #3dc06c, #4d9bd8 75%)',
      },
    },
    shadow: {
      boxShadow: `0px 2px 4px -1px rgb(0 0 0 / 20%), 
      0px 4px 5px 0px rgb(0 0 0 / 14%), 
      0px 1px 10px 0px rgb(0 0 0 / 12%)`,
    },
    toolbar: {
      maxWidth: theme.breakpoints.values.xxl,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      color: 'black',
      userSelect: 'none',
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    image: {
      height: '40px',
    },
    searchBarContainer: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 1rem',
      },
    },
    buttonContainer: {
      color: 'black',
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-end',
    },
  })
);

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [showShadow, setShowShadow] = useState(false);

  // set showShadow to true when user scrolls down
  useEffect(() => {
    let mounted = true;
    const checkScroll = () => {
      if (!showShadow && window.pageYOffset > 0 && mounted) {
        setShowShadow(true);
      } else if (showShadow && window.pageYOffset <= 0 && mounted) {
        setShowShadow(false);
      }
    };
    window.addEventListener('scroll', checkScroll);

    return () => {
      mounted = false;
    };
  });

  return (
    <AppBar className={`${classes.appbar} ${showShadow ? classes.shadow : ''}`}>
      <Toolbar className={classes.toolbar}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div className={classes.logo}>
            <Link href='/'>
              <a>
                <img
                  className={classes.image}
                  src='/app-logo.png'
                  alt='home page'
                />
              </a>
            </Link>
          </div>
          {isLaptopScreen && (
            <div className={classes.searchBarContainer}>
              <SearchBar />
            </div>
          )}
          <div className={classes.buttonContainer}>
            <NavBarButtons />
          </div>
        </div>
        {!isLaptopScreen && (
          <div style={{ marginBottom: '0.5rem', width: '100%' }}>
            <SearchBar />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
