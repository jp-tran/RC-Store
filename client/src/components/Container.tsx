import { createStyles, makeStyles } from '@material-ui/core';
import { ReactNode } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const Container = ({ children }: { children: ReactNode }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Container;
