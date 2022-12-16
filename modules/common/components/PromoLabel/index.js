import { makeStyles } from "@material-ui/core/styles"
import PropTypes from 'prop-types'

import { Grid, Chip } from '@material-ui/core'

const useStyles = makeStyles({
    label: {
        fontSize: 10,
        fontWeight: 900,
        paddingLeft: '0 !important'
    }
})
const PromoLabel = ({ promoLabel }) => {

    const classes = useStyles()

    return (
        <Grid container spacing={1}>
            { promoLabel.length > 0 && promoLabel.map((item, id) => {
                return (
                    <Grid item key={id}>
                        <Chip 
                            color="secondary"
                            size="small"
                            label={item.toLowerCase()}
                            className={classes.label}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}

PromoLabel.propTypes = {
    promoLabel: PropTypes.array.isRequired
}

export default PromoLabel