import * as React from 'react';

import Link from 'next/link';

import { Card, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import StyledButton from '../productPage/StyledButton';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  root: {
    width: '300px',
    margin: '10px',
    transition: 'transform(.2s)',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  image: {
    width: '300px',
    height: '300px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0.8em',
  },
});

export interface ProductCardProps {
  productId: string;
  productName: string;
  price: string;
  imageSrc: string;
  description: string;
  longDescription?: string;
}

const ProductCard: React.FunctionComponent<ProductCardProps> = (props) => {
  const { productId, productName, imageSrc, description } = props;
  const classes = useStyles();

  return (
    <Link href={`/products/${productId}`}>
      <a className={classes.link}>
        <Card className={classes.root} key={productId}>
          <CardHeader title={productName} />
          <CardMedia className={classes.image} image={imageSrc} />
          <CardContent>{description}</CardContent>
          <CardActions className={classes.buttonContainer}>
            <StyledButton>More information</StyledButton>
          </CardActions>
        </Card>
      </a>
    </Link>
  );
};

export default ProductCard;
