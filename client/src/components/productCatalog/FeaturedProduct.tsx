import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  image: {
    maxWidth: '100%',
  },
});

export interface FeaturedProductProps {
  productName: string;
  imageSrc: string;
}

const FeaturedProduct: React.FunctionComponent<FeaturedProductProps> = ({
  productName,
  imageSrc,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={imageSrc} className={classes.image} />
    </div>
  );
};

export default FeaturedProduct;
