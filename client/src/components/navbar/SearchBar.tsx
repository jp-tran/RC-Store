import React from 'react';

import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'white',
      transition: '0.2s linear',
      border: '2px solid #949494',
      '&:focus-within': {
        borderColor: 'green',
      },
      // '&:hover': {
      //   backgroundColor: 'rgba(153,153,153,0.1)',
      // },
      width: '100%',
      height: '2.5rem',
      display: 'flex',
      alignItems: 'center',
    },
    searchIcon: {
      color: 'black',
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      color: 'black',
      padding: theme.spacing(1, 1, 1, 0),
      marginLeft: `calc(1em + ${theme.spacing(4)}px)`, //margin to account for search icon
      width: '100%',
      height: '100%',
    },
  })
);

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        className={classes.input}
        placeholder='Search...'
        type='search'
        // value={searchQuery}
        // onChange={handleChange}
        inputProps={{
          spellCheck: 'false',
          maxLength: '100',
        }}
      />
    </div>
  );
};

export default SearchBar;
