import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';

import { Badge, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AccountIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import NextLink from '../NextLink';

const useStyles = makeStyles(() =>
  createStyles({
    buttonRoot: {
      fontSize: '1rem',
      fontWeight: 400,
      display: 'flex',
      justifyContent: 'center',
    },
  })
);

const NavBarButtons = () => {
  const classes = useStyles();
  const [session] = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut();
    handleMenuClose();
  };

  const { cartCount } = useShoppingCart();

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={handleMenuClose}
        component={NextLink}
        href='/account'
        disableFocusRipple={true}
        classes={{ root: classes.buttonRoot }}
      >
        Account
      </MenuItem>
      <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
    </Menu>
  );

  return (
    <>
      <IconButton aria-label='shopping cart' color='inherit'>
        <Badge badgeContent={cartCount} color='secondary'>
          <Link href='/shoppingcart'>
            <ShoppingCartIcon />
          </Link>
        </Badge>
      </IconButton>
      {session ? (
        <IconButton
          aria-label='account of current user'
          aria-haspopup='true'
          onClick={handleMenuOpen}
          color='inherit'
        >
          <AccountIcon />
        </IconButton>
      ) : (
        <Button onClick={() => signIn()}>Sign In</Button>
      )}
      {renderMenu}
    </>
  );
};

export default NavBarButtons;
