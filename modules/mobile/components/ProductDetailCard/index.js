import { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import { Grid, Card, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import theme from 'theme'
import ProductRating from '@common/components/ProductRating'
import { currencyConverter } from '@utils/currency'
import PromoCard from '@common/components/PromoCard'
import ProductInfoPanel from '@common/components/ProductInfoPanel'


const useStyles = makeStyles ({
    container: {
        marginBottom: theme.spacing(8)
    },
    media: {
        height: 8,
        paddingTop: '56.25%'
    },
    productInfo: {
        marginTop: theme.spacing(2)
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    }
})

const ProductDetailCard = ({ img, title, sold, description, quantity, condition, weight, promo, price, rating }) => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={classes.container}>
            <Card>
                <CardMedia 
                    className={classes.media}
                    image={img}
                    title={title}
                />
                <CardContent>
                    <Typography variant='h5' component="h1" gutterBottom>
                        {title}
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={6}>
                            <Typography variant='button' color='secondary'>
                                {currencyConverter(price)}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <ProductRating rating={rating} sold={sold}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.productInfo}>
                        <Grid container direction='column' justifyContent='center' item xs={3} sm={3}>
                            <Typography align='center' variant='overline'>
                                Berat
                            </Typography>
                            <Typography align='center' variant='button'>
                                {weight}
                            </Typography>
                        </Grid>

                        <Grid container direction='column' justifyContent='center' item xs={3} sm={3}>
                            <Typography align='center' variant='overline'>
                                Kondisi
                            </Typography>
                            <Typography align='center' variant='button'>
                                {condition}
                            </Typography>
                        </Grid>

                        <Grid container direction='column' justifyContent='center' item xs={3} sm={3}>
                            <Typography align='center' variant='overline'>
                                Stock
                            </Typography>
                            <Typography align='center' variant='button'>
                                {quantity}
                            </Typography>
                        </Grid>

                        <Grid container direction='column' justifyContent='center' item xs={3} sm={3}>
                            <Typography align='center' variant='overline'>
                                Terjual
                            </Typography>
                            <Typography align='center' variant='button'>
                                {sold}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions>
                    <Grid container justifyContent='center' alignContent='center'>
                        <IconButton
                            onClick={handleExpandClick}
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded
                            })}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>
                </CardActions>
                <Collapse
                    in={expanded}
                    timeout='auto'
                    unmountOnExit
                >
                    <CardContent>
                        <Typography paragraph variant='subtitle2'>
                            Deskripsi
                        </Typography>
                        <Typography paragraph variant='body2'>
                            {description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <PromoCard promo={promo}/>
            <ProductInfoPanel />
        </div>
    )
}

ProductDetailCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    promo: PropTypes.array.isRequired
}
export default ProductDetailCard