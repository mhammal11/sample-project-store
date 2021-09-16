import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, total }) => {
    const isEmpty = !cart.length;
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link to="/" className={classes.link}>start adding some</Link>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.map((el) => (
                    <Grid el xs={12} sm={4} key={el.id} >
                        {/* <div key={el.id}>
                            {`${el.name}: $${el.price}`}
                        </div> */}
                        <CartItem item={el} />
                    </Grid>
    ))};
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: ${total}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} gutterBottom variant="h3">Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart