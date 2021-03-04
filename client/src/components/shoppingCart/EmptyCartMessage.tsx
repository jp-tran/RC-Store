import { createStyles, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
    },
    text: {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  })
);

const EmptyCartMessage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.text} component='h2' variant='h4'>
        Your cart is empty &#128577;
      </Typography>
    </div>
  );
};

export default EmptyCartMessage;
