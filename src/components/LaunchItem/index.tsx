import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Card, Button, CardActions, Avatar, CardHeader, CardMedia } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


type Props = {
    launch: any
}
const LaunchItem: React.FC<Props> = ({ launch }) => {

    const {
        launch_year,
        mission_name,
        links: { mission_patch_small, flickr_images }
    } = launch;

    return (
        <Card className="launch-item" elevation={3}>
            <CardHeader style={{ fontWeight: 'bold', fontFamily: 'BioRhyme', fontSize: 'large' }}
                avatar={
                    <Avatar style={{ fontWeight: 'bold' }} alt="patch" src={mission_patch_small} />
                }
                titleTypographyProps={{ variant: 'h6' }}
                subheaderTypographyProps={{ variant: 'subtitle1' }}
                title={mission_name}
                subheader={launch_year}
            />
            <CardMedia
                style={{
                    height: 0,
                    paddingTop: '56.25%'
                }}
                image={flickr_images[0]}
                title={mission_name}
            />
            <CardActions>
                <Button style={{ marginLeft: "auto" }} size="small" component={RouterLink} to={`/launch/${launch.id}`} > <ArrowForwardIosIcon /></Button>
            </CardActions>

        </Card>
    )
}

export default LaunchItem
