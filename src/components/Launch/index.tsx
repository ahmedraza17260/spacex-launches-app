/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import { Typography, Grid, Container, CircularProgress, List, ListItem, Divider } from '@material-ui/core';
import Moment from 'react-moment';

const LAUNCH_QUERY = gql`
    query LaunchList($id: ID!) {
        launch(id: $id) {
            launch_date_utc
            launch_site {
              site_name
            }
            launch_success
            links {
              flickr_images
            }
            mission_name
            rocket {
              rocket_name
            }
            details
          }
    }  
`

const Launch = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { id }
  });

  if (loading) return <div className="launch-page"><CircularProgress /></div>;
  if (error) {
    console.log(error);
    return <div className="launch-page">Error Occurred</div>;
  }

  const {
    launch_date_utc,
    launch_site: { site_name },
    links: { flickr_images },
    mission_name,
    rocket: { rocket_name },
    details
  } = data.launch;

  return (
    <div >
      <Container className="launch-page" maxWidth="lg">
        <List>
          <ListItem>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'BioRhyme' }} variant="h6" gutterBottom> <span className="label"> Date: </span><Moment format="DD-MM-YYYY">{launch_date_utc}</Moment> </Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'BioRhyme' }} variant="h5" gutterBottom> <span className="label">Mission Name: </span> {mission_name}</Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'BioRhyme' }} variant="h5" gutterBottom> <span className="label">Rocket Name: </span> {rocket_name}</Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'BioRhyme' }} variant="h5" gutterBottom> <span className="label">Launch Site: </span> {site_name}</Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'BioRhyme' }} gutterBottom>{details}</Typography>
          </ListItem>
          <Divider />
        </List>


        <Grid container spacing={2}>
          {
            flickr_images.map((image: string) =>
              <Grid item key={Math.floor((Math.random() * 100) + 1)} >
                <img className="image" src={image} alt="img" />
              </Grid>
            )
          }
        </Grid>
      </Container>
    </div >
  )
}

export default Launch
