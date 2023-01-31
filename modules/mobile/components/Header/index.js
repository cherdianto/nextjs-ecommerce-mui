import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'


const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}))
const Header = () => {
    const classes = useStyles()
    return (
         <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Link href={"/"}>
                        <Typography variant='h6'>
                            Ecommerce Web
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
         </div>
    )
}

export default Header