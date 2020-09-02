/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import Brightness6Icon from '@material-ui/icons/Brightness6';
import { Link } from 'react-router-dom';
type Props = {
    toggle: () => void;
}
const Navigation = () => {

    return (
        <>
            <AppBar style={{ backgroundColor: '#74ebd5', color: 'black', fontWeight: 'bolder', fontFamily: 'BioRhyme' }} position="static">
                <Toolbar>
                    <h2>SpaceX</h2>
                    <Button style={{ fontWeight: 'bold', marginLeft: "auto", fontFamily: 'BioRhyme' }} component={Link} to="/" color="inherit">Back</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navigation
