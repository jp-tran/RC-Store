import * as React from 'react';

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

export interface ProductProps {
  productName: string;
  imageSrc: string;
  description: string;
}

const Product: React.FunctionComponent<ProductProps> = (props) => {
  const { productName, imageSrc, description } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={productName} />
      <CardMedia className={classes.image} image={imageSrc} />
      <CardContent>{description}</CardContent>
      <CardActions>
        <Button>More information</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
