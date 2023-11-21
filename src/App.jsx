import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import { SubscribeModal } from './SubscribeModal';
import { Grid, Stack, Link } from '@mui/material';

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Container maxWidth="md" style={{backgroundColor: 'transparent', padding: 30, boxShadow: 'none'}}>
        <Container maxWidth="sm" sx={{p: {
          xs: 5,
          sm: 10
        }}} >
          <Stack spacing={5}>
            <Grid container >
              <Grid item spacing={2} sm={6} xs={12}>
                <Typography variant="h5" component="h3" color="primary">
                  Bitcoin Scout
                </Typography>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Link onClick={() => setOpen(true)}>
                  <Typography variant="h5" component="h3" color="primary" align='right'>
                  Join the waitlist ={'>'}
                  </Typography>

                </Link>
              </Grid>
            </Grid>
            <Typography component='h1' variant='h2'>
              Connect With Bitcoiners
            </Typography>
            <Typography component='p' variant='body1' sx={{paddingBottom: 5}}>
              Connect with diversely skilled bitcoiners seeking to team up and create innovative products and services that empower the bitcoin ecosystem.
            </Typography>
            <Button color="secondary" variant="contained" onClick={() => setOpen(true)} size="large">
              Join the waitlist
            </Button>
          </Stack>
        </Container>
      </Container>
      <SubscribeModal open={open} setOpen={setOpen}/>
    </Box>
  );
}
