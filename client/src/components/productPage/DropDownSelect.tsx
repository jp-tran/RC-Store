import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  FormControl,
  Input,
  NativeSelect,
  Typography,
} from '@material-ui/core';
import { Dispatch, SetStateAction } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      color: 'black',
      margin: '10px',
      [theme.breakpoints.up('md')]: {
        marginRight: '2rem',
      },
    },
    inputLabel: {
      color: 'inherit',
      fontSize: '1rem',
    },
    select: {
      color: 'inherit',
      backgroundColor: 'white',
      height: '1.5rem',
      borderRadius: theme.shape.borderRadius,
      transition: '0.2s linear',
      border: '2px solid #949494',
      '&:focus-within': {
        border: `2px solid ${theme.palette.primary.main}`,
      },
      '&:hover': {
        backgroundColor: 'rgba(153,153,153,0.1)',
      },
    },
    selectRoot: {
      paddingLeft: '8px',
      '&:hover, &:focus, &:active': {
        backgroundColor: 'transparent',
      },
    },
  })
);

interface Props {
  label: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  width: string;
}

const DropDownSelect = (props: Props) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.setSelectedOption(event.target.value as string);
  };
  return (
    <FormControl className={classes.formControl} style={{ width: props.width }}>
      <Typography align='left' color='inherit' variant='body1'>
        {props.label}
      </Typography>
      <NativeSelect
        className={classes.select}
        value={props.selectedOption}
        onChange={handleChange}
        id={props.label}
        classes={{ select: classes.selectRoot }}
        input={<Input disableUnderline={true} />}
      >
        {props.options.map((item: string) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default DropDownSelect;
