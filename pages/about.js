import Link from 'next/link'
import { Avatar, Chip } from '@material-ui/core'

const about = () => {
    return (
        <div>
            hallo world

            <Link href={"/"}>
                <a>Back to home</a>
            </Link>
            <Avatar alt='Goku' src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
            <Chip label="this is a chip" />
        </div>
    )
}

export default about