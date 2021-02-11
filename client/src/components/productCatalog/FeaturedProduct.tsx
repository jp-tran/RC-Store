import Link from 'next/link';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '100%',
    transition: 'transform(.2s)',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  textContainer: {
    position: 'absolute',
    top: '0',
  },

  text: {
    margin: '0',
    padding: '5px 20px',
    background: 'black',
    color: 'white',
  },
});

export interface FeaturedProductProps {
  name: string;
  sku: string;
  price: number;
  image?: string;
}

const FeaturedProduct: React.FunctionComponent<FeaturedProductProps> = ({
  sku,
  name,
  price,
  image,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Link href={`/products/${sku}`}>
        <a>
          <img src={image} className={classes.image} />
        </a>
      </Link>

      <div className={classes.textContainer}>
        <h2 className={classes.text}>
          {name}
          <br />
        </h2>
        <h3 className={classes.text}>${price.toString()}</h3>
      </div>
    </div>
  );
};

export default FeaturedProduct;
