import PropTypes from 'prop-types'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'

import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import PromoLabel from '../PromoLabel'
import ProductRating from '../ProductRating'

import { currencyConverter } from '@utils/currency'

const useStyles = makeStyles({
    card: {
        maxWidth: 368
    },
    image: {
        height: 148
    },
    price: {
        lineHeight: 'normal'
    },
    relative: {
        position:"relative"
    },
    promoLabel: {
        position:"absolute",
        bottom: 6,
        left: 4
    }
})
const ProductCard = ({ img, title, promoLabel, price, rating, sold, productID }) => {
    const classes = useStyles()

    return (
        <Link href="/products/[id]" as={`products/${productID}`}>
            <Card>
                <div className={classes.card}>
                    <div className={classes.relative}>
                        
                        <CardMedia 
                            className={classes.image}
                            image={img}
                            title={title}
                        />

                        <div className={classes.promoLabel}>
                            <PromoLabel promoLabel={promoLabel}/>
                        </div>
                    </div>
                    <CardContent>
                        <Grid container direction='column'>
                            <Typography gutterBottom variant='subtitle2' component="h2">
                                {title}
                            </Typography>
                            <Typography variant='overline' className={classes.price}>
                                {currencyConverter(price)}
                            </Typography>
                            <ProductRating rating={rating} sold={sold} />
                        </Grid>
                    </CardContent>
                </div>
            </Card>
        </Link>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    promoLabel: PropTypes.array,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    sold: PropTypes.number,
    productID: PropTypes.number.isRequired
}

export default ProductCard