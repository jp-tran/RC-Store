import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

import { Badge, Button, IconButton } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBarButtons = () => {
  const [session, loading] = useSession();

  return (
    <>
      <IconButton aria-label='shopping cart' color='inherit'>
        <Badge badgeContent={7} color='primary'>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      {session && (
        <>
          <IconButton
            aria-label='account of current user'
            // aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color='inherit'
          >
            <AccountIcon />
          </IconButton>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </>
      )}
      {!session && <Button onClick={() => signIn()}>Sign In</Button>}
    </>
  );
};

export default NavBarButtons;
