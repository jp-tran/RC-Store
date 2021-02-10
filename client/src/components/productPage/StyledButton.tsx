import { makeStyles, Button } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import { ReactNode } from 'react';

export interface StyledButtonProps {
  children?: ReactNode;
}

const useStyles = makeStyles({
  button: {
    background: 'black',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    color: 'white',
    fontSize: '1.3em',
    '&:hover': {
      backgroundColor: 'white',
      border: 'solid black',
      color: 'black',
    },
  },
});

const StyledButton: React.FunctionComponent<StyledButtonProps> = ({
  children,
}) => {
  const classes = useStyles();

  return <Button className={classes.button}>{children}</Button>;
};

export default StyledButton;
