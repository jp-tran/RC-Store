import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '90vh',
      width: '100%',
      maxWidth: theme.breakpoints.values.xl,
      backgroundImage: 'url("/home-page-cover.svg")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'auto 80%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr',
    },
    topContainer: {
      padding: '2rem',
      [theme.breakpoints.up(1200)]: {
        paddingLeft: '10vw',
        paddingTop: '4rem',
      },
      [theme.breakpoints.up('xxl')]: {
        paddingLeft: '2rem',
      },
    },
    mainText: {
      fontFamily: "'Titillium Web', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
      userSelect: 'none',
      [theme.breakpoints.up('xs')]: {
        fontSize: '2.5rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
      },
      [theme.breakpoints.up('xxl')]: {
        fontSize: '4.5rem',
      },
    },
    subText: {
      fontWeight: 300,
      userSelect: 'none',
      [theme.breakpoints.up('xs')]: {
        maxWidth: '100%',
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('sm')]: {
        maxWidth: '60%',
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: '50%',
      },
      [theme.breakpoints.up('xxl')]: {
        fontSize: '3rem',
      },
    },
    scrollDownButton: {
      cursor: 'pointer',
      alignSelf: 'end',
      justifySelf: 'end',
      margin: '2rem',
      [theme.breakpoints.up(1200)]: {
        marginRight: '10vw',
        marginBottom: '4rem',
      },
      [theme.breakpoints.up('xxl')]: {
        marginRight: '2rem',
      },
    },
    scrollDownText: {
      userSelect: 'none',
      fontSize: '1.5rem',
      transition: '0.25s ease-out',
      '&:hover, &:focus': {
        textDecoration: 'underline',
        color: theme.palette.primary.main,
      },
    },
  })
);

const HomePageCover = () => {
  const classes = useStyles();
  const isLaptopScreen = useMediaQuery('(min-width:769px)');
  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <Typography className={classes.mainText} component='h2' variant='h2'>
          Never Graduate
        </Typography>
        <Typography className={classes.subText} component='h3' variant='h4'>
          Bring a piece of RC with you wherever you go.
        </Typography>
      </div>
      {isLaptopScreen && (
        <Link
          to='RC-merch'
          duration={250}
          smooth={true}
          offset={-50}
          className={classes.scrollDownButton}
        >
          <Typography className={classes.scrollDownText}>
            Shop RC Merch &darr;
          </Typography>
        </Link>
      )}
    </div>
  );
};

export default HomePageCover;
