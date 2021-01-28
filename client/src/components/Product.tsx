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

export interface Props {}

const Product: React.FunctionComponent<Props> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title='A product' />
      <CardMedia
        className={classes.image}
        // image='./assets/img/dummy_product.jpeg'  //<-- Can't load from src
        image='https://dummyimage.com/300x300/5467f2/fff'
      />
      <CardContent>
        This is a great product you'd like to buy for sure.
      </CardContent>
      <CardActions>
        <Button>More information</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
