import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { formatCurrencyString } from 'use-shopping-cart';
import { ProductProps } from '../../types';
import formatDate from '../../utils/format-date';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '1rem auto',
      borderRadius: 0,
      display: 'flex',
      boxShadow: '0 1px 5px 0px rgba(38,59,94,0.3)',
      '&:hover,&:focus-within': {
        boxShadow: '0 2px 15px 5px rgba(38,59,94,0.3)',
        transition: '0.25s ease-out',
      },
      [theme.breakpoints.up('xs')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
      },
    },
    contents: {
      [theme.breakpoints.up('md')]: {
        flexGrow: 1,
      },
    },
    header: {
      paddingBottom: 0,
    },
    subheader: {
      color: theme.palette.primary.main,
      fontWeight: 500,
    },
    titleFont: {
      fontFamily: "'Titillium Web', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
    },
    productDetails: {
      paddingTop: 0,
    },
    media: {
      alignSelf: 'center',
      width: 300,
      height: 300,
      margin: '5px',
      // paddingTop: '56.25%', // 16:9
    },
  })
);

const MyProductCard = ({ product }: { product: ProductProps }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised={false}>
      <div className={classes.contents}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={product.name}
          subheader={formatCurrencyString({
            value: product.price,
            currency: product.currency,
          })}
          classes={{
            root: classes.header,
            subheader: classes.subheader,
            title: classes.titleFont,
          }}
        />
        <CardContent classes={{ root: classes.productDetails }}>
          <Typography style={{ fontWeight: 300, marginBottom: '1rem' }}>
            Listed on {formatDate(product.datePosted)} in {product.location}
          </Typography>
          <Typography style={{ marginBottom: '1rem' }}>
            <strong>Condition:</strong> {product.condition}
          </Typography>
          <Typography>{product.description}</Typography>
        </CardContent>
      </div>

      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
    </Card>
  );
};

export default MyProductCard;
