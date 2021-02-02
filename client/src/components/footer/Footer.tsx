import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Box, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    borderTop: '1px solid #d7dada', // From the RC website
    backgroundColor: 'white', // can change
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Box display='flex' flexDirection='row' justifyContent='flex-start'>
          <Typography variant='body1'>
            <Link href='/about-us' style={{ marginRight: '1.5em' }}>
              About us
            </Link>
            <Link href='/faq'>FAQ</Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
