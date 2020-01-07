import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { Well } from '.';

const WellsList = props => {
    const { wells } = props;
    return wells && wells.list && wells.list.length < 0 ? (
        <Typography variant="h2">No wells</Typography>
    ) : (
        <Grid item xs={12}>
            <Paper
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30px',
                }}
            >
                {wells.list.map(well => (
                    <Well key={well.id} well={well} />
                ))}
            </Paper>
        </Grid>
    );
};

export default WellsList;
