import * as React from 'react';

import Link from 'next/link';

import { Card, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '300px',
    margin: '10px',
  },
  image: {
    width: '300px',
    height: '300px',
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
    <Card className={classes.root} key={productId}>
      <CardHeader title={productName} />
      <CardMedia className={classes.image} image={imageSrc} />
      <CardContent>{description}</CardContent>
      <CardActions>
        <Link href={`/products/${productId}`}>
          <a>
            <Button>More information</Button>
          </a>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
