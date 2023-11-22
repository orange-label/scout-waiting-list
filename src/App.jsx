import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import { SubscribeModal } from './SubscribeModal';
import { Grid, Stack, Link } from '@mui/material';
import Copyright from './Copyright';

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <Box>
            <Container maxWidth="sm" sx={{marginY: 10}}>
              <Stack spacing={5}>
                <Grid container >
                  <Grid item spacing={2} sm={6} xs={12}>
                    <Typography variant="h5" component="h3" color="primary">
                      <strong>
                      ₿Scout
                        </strong>
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
                <Typography component='h1' variant='h2' align="center">
                ₿Scout
                </Typography>
                <Typography component='p' variant='body1' sx={{paddingBottom: 5}}>
                  Work with bitcoiners based on your skills and interests.
                </Typography>
                <Button color="secondary" variant="contained" onClick={() => setOpen(true)} size="large">
                  Join the waitlist
                </Button>
              </Stack>
            </Container>
            <Container maxWidth="sm" sx={{backgroundColor: '#D7D2C1', marginBottom: 10}}>
            <Stack spacing={5}>
              <Typography color="primary" variant="body1" gutterBottom>
                Work towards a bitcoin standard. Scout out bitcoiners based on their skills and interests, and find opportunities for yourself to bring value to others based on your interests and skills.
              </Typography>
              <Button color="primary" variant="contained" onClick={() => setOpen(true)} size="large" fullWidth>
                  Get notified when we launch
              </Button>

            </Stack>
            </Container>
      <Copyright/>
      <SubscribeModal open={open} setOpen={setOpen}/>
    </Box>
  );
}
