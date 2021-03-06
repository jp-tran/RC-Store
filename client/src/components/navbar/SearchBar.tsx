import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { SearchBarContext } from '../../contexts/SearchBarContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      backgroundColor: 'white',
      transition: '0.2s linear',
      border: '2px solid #949494',
      '&:focus-within': {
        borderColor: 'green',
      },
      width: '100%',
      height: '2.5rem',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      color: 'black',
      padding: theme.spacing(1, 1, 1, 0),
      marginLeft: '0.5rem',
      width: '100%',
      height: '100%',
    },
    searchButton: {
      borderRadius: 0,
    },
  })
);

const SearchBar = () => {
  const classes = useStyles();

  const router = useRouter();

  const { query, setQuery } = useContext(SearchBarContext);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuery(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(
      {
        pathname: '/search',
        query: { query },
      },
      undefined,
      { shallow: true } // change path without reloading page
    );
  };

  return (
    <form className={classes.search} onSubmit={handleSubmit} id='search_form'>
      <InputBase
        className={classes.input}
        placeholder='Search...'
        type='search'
        name='query'
        value={query}
        onChange={handleChange}
        inputProps={{
          spellCheck: 'false',
          maxLength: '50',
        }}
      />
      <Button
        type='submit'
        form='search_form'
        value='Submit'
        variant='contained'
        color='primary'
        disableElevation={true}
        className={classes.searchButton}
      >
        <SearchIcon />
      </Button>
    </form>
  );
};

export default SearchBar;
