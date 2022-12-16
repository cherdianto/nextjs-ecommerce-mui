import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Grid, Typography } from '@material-ui/core'
import { Star, StarHalf, StarsTwoTone } from '@material-ui/icons'
import { yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
    root: {
        justifyContent: 'flex-end'
    }
})
const ProductRating = ({ rating, sold, alignRight }) => {
    const classes = useStyles()
    
    const starsComponent = []

    const mod = rating % 1

    const ratingCountFloored = Math.floor(rating)

    for( let i = 0; i < ratingCountFloored; i++) {
        starsComponent.push(
            <Star key={i} style={{ fontSize: 12, color: yellow[800]}} />
        )
    }

    if (mod >= 0.5){
        starsComponent.push(
            <StarHalf key={'half-star'} style={{ fontSize: 12, color: yellow[800]}} />
        )
    }
    return (
        <Grid 
            container
            alignItems='center'
            className={clsx({
                [classes.root]: alignRight
            })}
        >
            {starsComponent}
            <Typography variant='caption'>
                {`${sold}`}
            </Typography>

        </Grid>
    )
}


export default ProductRating