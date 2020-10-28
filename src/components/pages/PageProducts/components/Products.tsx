import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Product} from "models/Product";
import {formatAsPrice} from "utils/utils";
import AddProductToCart from "components/AddProductToCart/AddProductToCart";
// import axios from 'axios';
// import API_PATHS from "constants/apiPaths";
import productList from "./productList.json";

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: 600,
  },
  
  cardMedia: {
    paddingTop: 0, // 16:9
    margin: 0,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "gold",
    padding: theme.spacing(6),
  },
}));

export default function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // axios.get(`${API_PATHS.bff}/product/available/`)
    //   .then(res => setProducts(res.data));
    setProducts(productList);
  }, [])

  return (
    <Grid container spacing={3} >
      {products.map((product: Product) => (
        <Grid container item key={product.id} xs={12} sm={3} md={4}>
          <Card className={classes.card}>
            <img
              className={classes.cardMedia}
              alt="ImageProduct"
              src={product.imageUrl}
              title="Image title"
              width="100%"
              height="auto"
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.title}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {formatAsPrice(product.price)}
              </Typography>
            </CardContent>
            <CardActions>
              <AddProductToCart product={product}/>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
