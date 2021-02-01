import React from 'react';

import { Badge, IconButton } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBarButtons = () => {

  return (
    <>
      <IconButton aria-label='shopping cart' color='inherit'>
        <Badge badgeContent={7} color='secondary'>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton
        edge='end'
        aria-label='account of current user'
        // aria-haspopup="true"
        // onClick={handleProfileMenuOpen}
        color='inherit'
      >
        <AccountIcon />
      </IconButton>
    </>
  );
};

export default NavBarButtons;
